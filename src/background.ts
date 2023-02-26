/*global chrome*/
export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "factChecking",
    title: "Verificar texto",
    contexts: ["selection"]
  })
  chrome.storage.local.set({ floatingButton: true }, () => {
    console.log("Botón flotante:" + true)
  })
  chrome.storage.local.set({ darkMode: false }, () => {
    console.log("Tema por defecto: light")
  })
})

chrome.contextMenus.onClicked.addListener(() => {
  openExtension()
})

chrome.runtime.onMessage.addListener((request) => {
  if (request && request.action === "open-extension") {
    openExtension()
  }
})

chrome.runtime.onMessage.addListener((request) => {
  if (request && request.action === "resize-window") {
    updateWindowSize(600, 460)
  }
})


chrome.runtime.onMessage.addListener((request) => {
  if (request && request.action === "open-options") {
    openOptions()
  }
})

const openExtension = () =>
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: getSelectionText
      },
      (selection) => {
        const selectedText = selection[0].result
        if (selectedText !== "") {
          chrome.storage.local.set({ lastText: selectedText })
          chrome.storage.local.get("lastText", (data) => {
            // Checking that the local variable is changing
            console.log("Saved: " + data.lastText)
          })
        }
      }
    )
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 600,
      height: 170,
      top: 400,
      left: 800
    })
  })

const openOptions = () => {
  chrome.windows.create({
    url: "options.html",
    type: "popup",
    width: 384,
    height: 160,
    top: 400,
    left: 800
  })
}

function getSelectionText() {
  return window.getSelection().toString()
}

const updateWindowSize = (width, height) => {
  chrome.windows.getCurrent((window) => {
    const updateInfo = {
      width: width,
      height: height
    }
    chrome.windows.update(window.id, updateInfo)
  })
}

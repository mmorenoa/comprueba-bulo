/*global chrome*/
export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "factChecking",
    title: "Verificar texto",
    contexts: ["selection"]
  })
  chrome.storage.local.set({ floatingButton: true }, () => {
    chrome.storage.local.get("floatingButton", (data) => {
      console.log("Botón flotante:" + data.floatingButton)
    })
  })
  chrome.storage.local.set({ darkMode: false }, () => {
    chrome.storage.local.get("darkMode", (data) => {
      console.log("Modo oscuro:" + data.darkMode)
    })
  })
  chrome.storage.local.set({ daltonicMode: 0 }, () => {
    chrome.storage.local.get("daltonicMode", (data) => {
      console.log("Modo de daltonismo:" + data.daltonicMode)
    })
  })
})

chrome.contextMenus.onClicked.addListener(() => {
  openExtension()
})

chrome.runtime.onMessage.addListener((request) => {
  switch (request && request.action) {
    case "open-extension":
      openExtension()
      break
    case "resize-window-for-loading":
      updateWindowSize(600, 460)
      break
    case "open-options":
      openOptions()
      break
    case "resize-window-for-options":
      updateWindowSize(600, 255)
    break
    default:
      break
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
      width: 700,
      height: 170,
      top: 400,
      left: 800
    })
  })

const openOptions = () => {
  chrome.windows.create({
    url: "options.html",
    type: "popup",
    width: 600,
    height: 250,
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

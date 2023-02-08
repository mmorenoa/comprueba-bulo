/*global chrome*/
export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "factChecking",
    title: "Verificar texto",
    contexts: ["selection"]
  })
})

function getSelectionText() {
  return window.getSelection().toString()
}

chrome.contextMenus.onClicked.addListener(() => {
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
      width: 450,
      height: 168,
      top: 400,
      left: 800
    })
  })
})

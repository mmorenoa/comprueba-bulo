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
  return window.getSelection().toString();
}

chrome.contextMenus.onClicked.addListener(() => {
  chrome.tabs.query({ active: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: getSelectionText
      },
      (selection) => {
        const selectedText = selection[0].result;
        console.log("Saved:" + selectedText)
        if (selectedText !== "") {
          chrome.storage.sync.set({ lastText: selectedText })
        }
      }
    );
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 450,
      height: 168
    })
  })
})
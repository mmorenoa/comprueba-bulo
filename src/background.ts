/*global chrome*/
/*global window*/
export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "factChecking",
    title: "Verificar texto",
    contexts: ["selection"]
  })
})

chrome.contextMenus.onClicked.addListener(() => {
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 450,
    height: 168,
    top: getTextPos()
  })
})

function getTextPos() {
  if (typeof window !== 'undefined') {
   return window.getSelection().getRangeAt(0).getBoundingClientRect().top
  }
}

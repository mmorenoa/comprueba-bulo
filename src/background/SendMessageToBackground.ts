export const SendMessageToBackground = (msg) => {
    chrome.runtime.sendMessage(
      {
        action: msg
      },
      () => {
        console.log(msg)
      }
    )
  }
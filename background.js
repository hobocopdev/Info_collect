
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "openTabs") {
    msg.urls.forEach((url, i) => {
      setTimeout(() => {
        chrome.tabs.create({ url: url, active: false });
      }, i * 1000);
    });
  }
});


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "collectInfo",
    title: "📋 收集应聘者信息",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "collectInfo") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});

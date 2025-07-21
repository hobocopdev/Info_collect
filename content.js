
function generateTimestamp() {
  return new Date().toISOString().replace(/[-:.TZ]/g, "");
}

function extractData() {
  const data = {
    no: generateTimestamp(),
    name: document.querySelector('h2')?.innerText || '',
    store: document.querySelector('.store-name')?.innerText || '',
    gender: document.querySelector('.gender')?.innerText || ''
  };
  return data;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "collect") {
    const data = extractData();
    chrome.storage.local.get({ collected: [] }, (res) => {
      const updated = [...res.collected, data];
      chrome.storage.local.set({ collected: updated }, () => {
        sendResponse({ status: "success", data });
      });
    });
    return true;
  }
});

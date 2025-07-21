
document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        const links = [...document.querySelectorAll('a')]
          .filter(a => a.href.includes('/candidates/view'))
          .map(a => a.href);
        chrome.runtime.sendMessage({ action: "openTabs", urls: links });
      }
    });
  });
});

document.getElementById('export').addEventListener('click', () => {
  chrome.storage.local.get({ collected: [] }, (res) => {
    const rows = [["No", "Name", "Store", "Gender"]];
    res.collected.forEach(item => {
      rows.push([item.no, item.name, item.store, item.gender]);
    });
    const csvContent = rows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({ url: url, filename: "applicants.csv" });
  });
});

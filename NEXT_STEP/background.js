chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.update(tab.id, {url: "index.html"});
});

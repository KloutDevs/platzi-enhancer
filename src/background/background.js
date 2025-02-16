chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
      // Show the page of my routes when the extension is installed
      chrome.tabs.create({
          url: 'https://platzi.com/home/mis-rutas/'
      });
  }
});

// Handler for messages between components
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Process different type of messages
  console.log('Received message:', request);
  return true;
});
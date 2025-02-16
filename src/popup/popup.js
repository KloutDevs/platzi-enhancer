document.addEventListener('DOMContentLoaded', () => {
  // Manage the links in the footer
  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          chrome.tabs.create({ url: e.target.href });
      });
  });

  // Get the current version of the extension
  const version = chrome.runtime.getManifest().version;
  document.querySelector('.footer p').textContent = `Versión ${version}`;
});
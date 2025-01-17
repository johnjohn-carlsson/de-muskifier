document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleFilter");
  
    // Initialize toggle state
    chrome.storage.local.get("filterEnabled", data => {
      toggleButton.textContent = data.filterEnabled ? "Turn Off" : "Turn On";
    });
  
    // Add event listener for toggle button
    toggleButton.addEventListener("click", () => {
      chrome.storage.local.get("filterEnabled", data => {
        const isEnabled = !data.filterEnabled;
  
        // Update storage with the new state
        chrome.storage.local.set({ filterEnabled: isEnabled }, () => {
          toggleButton.textContent = isEnabled ? "Turn Off" : "Turn On";
          // Notify the content script to enable/disable replacements
          chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, { filterEnabled: isEnabled });
          });
        });
      });
    });
  });
  
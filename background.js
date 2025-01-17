// background.js (Firefox-only)

let filterEnabled = true; // Default state is ON

browser.runtime.onMessage.addListener((request, sender) => {
  if (request.action === "setFilterState") {
    filterEnabled = request.enabled;
    console.log(`De-Muskifier is now ${filterEnabled ? "ON" : "OFF"}`);

    // 1) Persist the new state
    browser.storage.local.set({ filterEnabled });

    // 2) Notify the active tab
    return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (!tabs[0]) return;

      // If turning on, just send a message to run replacements
      if (filterEnabled) {
        return browser.tabs.sendMessage(tabs[0].id, { filterEnabled });
      } else {
        // If turning off, send a message to disable AND then reload
        return browser.tabs
          .sendMessage(tabs[0].id, { filterEnabled })
          .then(() => browser.tabs.reload(tabs[0].id));
      }
    });
  }
  else if (request.action === "getFilterState") {
    return Promise.resolve({ enabled: filterEnabled });
  }
});

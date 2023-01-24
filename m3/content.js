if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.storage.sync.get("ytrvp-border-radius", function (items) {
    if (!browser.runtime.error) {
        let observer = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (node == null || node.tagName == null) {
                        continue;
                    }
                    if (node.tagName.toLowerCase() !== 'video') {
                        continue;
                    }

                    const video = document.getElementsByClassName('html5-video-player')[0];
                    video.style.borderRadius = items['ytrvp-border-radius'] ?? '12px';
                }
            }
        });

        observer.observe(document, { childList: true, subtree: true });
    }
});

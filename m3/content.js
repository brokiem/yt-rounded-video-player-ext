if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.storage.sync.get("ytrvp-border-radius", function(items) {
    if (!browser.runtime.error) {
        const video = document.getElementsByClassName('html5-video-player')[0];
        video.style.borderRadius = items['ytrvp-border-radius'] ?? '12px';
    }
});

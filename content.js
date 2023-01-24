chrome.storage.sync.get("ytrvp-border-radius", function(items) {
    if (!chrome.runtime.error) {
        const video = document.getElementsByClassName('html5-video-player')[0];
        video.style.borderRadius = items['ytrvp-border-radius'];
    }
});

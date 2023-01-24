document.body.onload = function() {
    chrome.storage.sync.get("ytrvp-border-radius", function (items) {
        if (!chrome.runtime.error) {
            document.getElementById("input").value = items['ytrvp-border-radius'] ?? "12px";
        }
    });
}

document.getElementById("set-button").onclick = function() {
    const d = document.getElementById("input").value;
    chrome.storage.sync.set({"ytrvp-border-radius": d}, function () {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });

    setTimeout(function () {
        window.close();
    }, 150);
}

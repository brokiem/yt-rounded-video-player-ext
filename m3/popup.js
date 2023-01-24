if (typeof browser === "undefined") {
    var browser = chrome;
}

document.body.onload = function() {
    browser.storage.sync.get("ytrvp-border-radius", function (items) {
        if (!browser.runtime.error) {
            document.getElementById("input").value = items['ytrvp-border-radius'] ?? "12px";
        }
    });
}

document.getElementById("set-button").onclick = function() {
    const d = document.getElementById("input").value;
    browser.storage.sync.set({"ytrvp-border-radius": d}, function () {
        if (browser.runtime.error) {
            console.log("Runtime error.");
        }
    });

    setTimeout(function () {
        window.close();
    }, 150);
}

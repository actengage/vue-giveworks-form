export default function script(url, callback) {
    let lastEvent, script = document.querySelector("script[src*='" + url + "']");

    function handleCallback() {
        if (typeof callback === "function") {
            script.addEventListener('load', function (e) {
                callback(lastEvent = e);
            }, false);
        }
    }

    if (!script) {
        var heads = document.getElementsByTagName("head");
        if (heads && heads.length) {
            var head = heads[0];
            if (heads[0]) {
                script = document.createElement('script');
                script.setAttribute('src', url);
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('charset', 'utf-8');

                heads[0].appendChild(script);

                dispatchEvent(new Event('load'));

                handleCallback();
            }
        }
    }
    else {
        callback(lastEvent);
    }

    return script;
};

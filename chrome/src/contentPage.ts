var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
    s.remove();
};
var globals = {};

document.addEventListener('globalVarsListener', function (e) {
    globals = e['detail'];
});

chrome.runtime.onMessage.addListener((request, msg, respond) => {
    
    const handler = new Promise((resolve, reject) => {
        if (request) {
            console.log("psps", globals) 
            resolve(globals);
        } else {
            reject('request is empty.');
        }
    });

    handler.then(message => respond(message)).catch(error => respond(error));

    return true;
});
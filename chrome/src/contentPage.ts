var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};

document.addEventListener('RW759_connectExtension', function(e) {
    
    console.log(e["detail"]);
});
var s = document.createElement('script');
s.src = chrome.extension.getURL('xhook.min.js');
(document.head || document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('main.js');
(document.head || document.documentElement).appendChild(s);

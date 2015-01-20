chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
    if(SnsBlocker.getFacebookState()){ 
        if(tab.url.match("^https?://(www.)?facebook.com")){
            chrome.tabs.update(tabId, {"url" : "http://pyazo.hachiojipm.org/image/jf4BWbOR4sbdxPNl141629790424634.png"}, function () {});
        }

    }
    if(SnsBlocker.getTwitterState()){
        console.dir(tab.url);
        if(tab.url.match("^https?://(www.)?twitter.com")){
            chrome.tabs.update(tabId, {"url" : "http://pyazo.hachiojipm.org/image/jf4BWbOR4sbdxPNl141629790424634.png"}, function () {});
        }
    }
});

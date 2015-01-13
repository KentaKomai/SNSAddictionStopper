$(function () {
    chrome.tabs.getSelected(null, function(tab) {
        $('#title').text(tab.title);
        $('#url').text(tab.url);
    });
});

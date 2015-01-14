$(function () {
    chrome.tabs.getSelected(null, function(tab) {
        $('#title').text(tab.title);
        $('#url').text(tab.url);

        $('#facebookHiddenSwitch').change( function(){
            if( $(this).is(':checked') ){ $('#facebookNotification').text("Hidden"); }
            else { $('#facebookNotification').text(""); }
        });
        $('#twitterHiddenSwitch').change( function(){
            if( $(this).is(':checked') ){ $('#twitterkNotification').text("Hidden"); }
            else {$('#twitterkNotification').text(""); }
        });

    });

    
});

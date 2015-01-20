$(function () {
    chrome.tabs.getSelected(null, function(tab) {
        var $fbSwitch = $('#facebookHiddenSwitch');
        var $fbNotice = $('#facebookNotification');
        var $twtrSwitch  = $('#twitterHiddenSwitch');
        var $twtrNotice = $('#twitterkNotification');

        init();
        $fbSwitch.change( function(){
            if( $(this).is(':checked') ){ $fbNotice.text("Hidden"); }
            else { $fbNotice.text(""); }
            SnsBlocker.toggleFacebook();
        });
        $twtrSwitch.change( function(){
            if( $(this).is(':checked') ){ $twtrNotice.text("Hidden"); }
            else { $twtrNotice.text(""); }
            SnsBlocker.toggleTwitter();
        });
        function init() {
            if(SnsBlocker.getFacebookState()){ 
                $fbSwitch.prop("checked", true);
                $fbNotice.text("Hidden"); 
            }
            if(SnsBlocker.getTwitterState()){
                $twtrSwitch.prop("checked", true);
                $twtrNotice.text("Hidden");
            }
        }
    });
});

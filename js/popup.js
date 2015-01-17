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

    var UserData =  (function () {
      var my = {};
      my.get = function (key) { return localStorage.getItem(key); }
      my.put = function (key, value) { return localStorage.setItem(key, value); }
      my.delete = function (key) { return localStorage.removeItem(key); }
      return my;
    }());
    var SnsBlocker = (function () {
      var my = {};
      var twitterKey = "TWITTER";
      var facebookKey = "FACEBOOK";

      my.toggleFacebook = function(){
        var on = function(){ UserData.put(facebookKey, 1);  };
        var off = function(){ UserData.delete(facebookKey); };
        var isHidden = UserData.get(facebookKey)
        if(isHidden == null){
          on();
        }else{
          off();
        }

      };
      my.getFacebookState = function(){
          console.dir(UserData.get(facebookKey))
          if(UserData.get(facebookKey) != null){ return true; }else{ return false; }
      }

      my.toggleTwitter = function(){
        var on = function(){ UserData.put(twitterKey, 1); };
        var off = function(){ UserData.delete(twitterKey); };
        var isHidden = UserData.get(twitterKey)
        if(isHidden == null){
          on();
        }else{
          off();
        }
      };
      my.getTwitterState = function(){
          console.dir(UserData.get(twitterKey));
          if(UserData.get(twitterKey) != null){ return true; }else{ return false;} 
      }
      return my;
    }());
});

window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = 'You are missing out :(';

        document.addEventListener('visibilitychange', function(e) {
          var isPageActive = !document.hidden;

          if(!isPageActive){
            document.title = attentionMessage;
          }else {
            document.title = pageTitle;
          }
        });
      };
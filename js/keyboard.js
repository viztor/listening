$(document).ready(function(){
    window.document.onkeypress = function(keyEvent)
        {
                keyEvent = keyEvent ? keyEvent : window.event;
                var keyvalue = keyEvent.which ? keyEvent.which : keyEvent.keyCode;
            switch (keyvalue)
            {
                case 34,37: 
                    autochange();//enter
                   break;
                case 32
              		if(isPlaying) audio.pause(); else audio.play();
           		   break;
                default:
       		       break;
            }
        }

})

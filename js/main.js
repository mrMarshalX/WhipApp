window.onload = function () {
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    }); 
    
    var audio = document.querySelector('#ogg'),
    	body = document.querySelector('body');
    
	document.addEventListener('deviceorientation', function (eventData) {
		var text = body.querySelectorAll('.text');
		Array.prototype.forEach.call(text, function (element, index, array) {
			element.classList.remove('shake');
		});
    	if (audio.paused && eventData && eventData.gamma !== 9.81) {
    		audio.play();
    	}
    }, false);
};

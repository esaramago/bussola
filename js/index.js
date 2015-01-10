var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(event) {

        if(event === "deviceready") {

            $('#loading').addClass('fadeout');

            // Update compass every x seconds
            var options = { frequency: 1000 };
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);

        }

    }
};


// onSuccess: Get the current heading
//
function onSuccess(heading) {
	$('.bussola').css({
	 	'-webkit-transform': 'rotate(-' + heading.magneticHeading + 'deg)',
		'transform': 'rotate(-' + heading.magneticHeading + 'deg)'
	});
    $('#coordinates').text(heading.magneticHeading.toFixed(0) + 'º');

}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}

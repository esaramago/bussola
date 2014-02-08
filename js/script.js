// The watch id references the current `watchHeading`
var watchID = null;

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    $('body').css('background-color', 'tomato');
    navigator.notification.alert("PhoneGap is ready!");
    startWatch();
}

// Start watching the compass
//
function startWatch() {

    // Update compass every 3 seconds
    var options = { frequency: 500 };

    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

// onSuccess: Get the current heading
//
function onSuccess(heading) {

	$('.ponteiro').css({
	 	'-webkit-transform': 'rotate(' + heading.magneticHeading + 'deg)',
		'transform': 'rotate(' + heading.magneticHeading + 'deg)'
	});
}

// onError: Failed to get the heading
//
function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}
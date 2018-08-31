
function isTimePassed(minuteThreshold){
	var temp = new Date();
	if( temp.getMinutes() < minuteThreshold){
		debugger;
		console.log("time not due: " + Date(), " due time: " + minuteThreshold);
	}
	else{
		clearInterval(timer);
		debugger;
		var print = require("./b.js");
		print("Jerry");
	}
}

var timer = setInterval( isTimePassed, 1000, [55]);

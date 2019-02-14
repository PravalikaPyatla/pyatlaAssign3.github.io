var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment,rate,years) {
	futureValue = investment; 
	for (var i = 1; i <= years; i++ ) {
		futureValue = futureValue + (futureValue * rate / 100); 
	} 
	//futureValue = futureValue.toFixed(2);
	return futureValue.toFixed(2);
};

var processEntries = function() {
	"use strict";
	var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
	var years = parseInt($("years").value);
	var error = "";
	if(isNaN(investment) || (investment<=0 || investment>100000)){
		error = "Investment is a number that’s greater than zero and less than or equal to 100,000";
		$("investment").focus();
	}else if(isNaN(rate) ||(rate<0 || rate>15)){
		error = "Interest rate is a number that’s greater than zero and less than or equal to 15";
		$("rate").focus();
	}else if(isNaN(years) || (years<0 || years>50)){
		error = "Years is a number that’s greater than zero and less than or equal to 50";
		$("years").focus();
	}
	if(error == ""){
		$("future_value").value = calculateFV(investment,rate,years);
	}
	else{
		alert(error);
		
	}
};

window.onload = function() {
            $("calculate").onclick = processEntries;
            $("investment").focus();
        };
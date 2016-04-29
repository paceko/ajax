"use strict";


// PART 1: SHOW A FORTUNE
// pass in AJAX's answer (the string), assign to randomFortune
// replace the html content at fortune-text with randomFortune
function replaceFortune(results) {
    var randomFortune = results;
    $('#fortune-text').html(randomFortune);
    console.log("Finished replaceFortune");
}


function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // getting AJAX's answer and passing that answer into replaceFortune
    $.get('/fortune', replaceFortune);
    console.log("Finished sending AJAX");
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



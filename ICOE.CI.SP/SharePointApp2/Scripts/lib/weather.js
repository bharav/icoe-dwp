

//var weather = {

//    display: function () {
//        return 6;
//    }
//}
//var exports = {};
function display() {
    return 6;
}

//function test1() {
//    return 7;
//}

//-------------------new code------------------//
//exports.testjas = function () {
//    "use strict";
//   // var pincode = $('#PinCode').val();
//   // $('#weatherDivID').weatherfeed([pincode]);
//    return 6;
//}

function displayWeather() {
    var pincode = $('#PinCode').val();
    if (checkingstring(pincode) == "Not in format") {
        $('#FormatDivID').append( "The syntax is always as follows: AAAANNNN \n A= Alpha/Letter; N= Number), i.e. UKXX0085");
    }
    else {
        $('#weatherDivID').weatherfeed([pincode]);
    }
}

//UKXX0085
//exports.checkingstring = function(inputElem) {
function checkingstring(inputElem) {
    var regex = new RegExp("^[A-Z]{4}[0-9]{4}$", "i");
    var searchText = inputElem;
    if ((searchText.length > 0) && !regex.test(searchText)) {
        // alert("The syntax is always as follows: AAAANNNN \n"
        // + "(A= Alpha/Letter; N= Number), i.e. UKXX0085");
        return "Not in format";
    }
    else
        return true;
}


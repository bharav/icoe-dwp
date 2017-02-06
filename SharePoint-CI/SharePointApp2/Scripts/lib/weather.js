
function display() {
    return 6;
}



function displayWeather() {
    var pincode = $('#PinCode').val();
    if (checkingstring(pincode) == "Not in format") {
        $('#FormatDivID').append( "The syntax is always as follows: AAAANNNN \n A= Alpha/Letter; N= Number), i.e. UKXX0085");
    }
    else {
        $('#weatherDivID').weatherfeed([pincode]);
    }
}

function checkingstring(inputElem) {
    var regex = new RegExp("^[A-Z]{4}[0-9]{4}$", "i");
    var searchText = inputElem;
    if ((searchText.length > 0) && !regex.test(searchText)) {
        return "Not in format";
    }
    else
        return true;
}


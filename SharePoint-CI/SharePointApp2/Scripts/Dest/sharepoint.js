function getUserName(){context.load(user),context.executeQueryAsync(onGetUserNameSuccess,onGetUserNameFail)}function onGetUserNameSuccess(){$("#message").text("Hello "+user.get_title())}function onGetUserNameFail(e,t){alert("Failed to get user name. Error:"+t.get_message())}function display(){return 6}function displayWeather(){var e=$("#PinCode").val();"Not in format"==checkingstring(e)?$("#FormatDivID").append("The syntax is always as follows: AAAANNNN \n A= Alpha/Letter; N= Number), i.e. UKXX0085"):$("#weatherDivID").weatherfeed([e])}function checkingstring(e){var t=new RegExp("^[A-Z]{4}[0-9]{4}$","i"),r=e;return r.length>0&&!t.test(r)?"Not in format":!0}var context=SP.ClientContext.get_current(),user=context.get_web().get_currentUser();$(document).ready(function(){getUserName()}),exports.multiply=function(e,t){"use strict";return e*t};var multiply_lib=require("./multiply");exports.square=function(e){"use strict";return multiply_lib.multiply(e,e)};
/**
* @author       Vaughan Hilts, Brandon Smith, Colin Gidzinski
* @copyright    2014 CP317
*/

/*
  * A utility JS function that will provide some utility for fetching locations from the remote HTTP server.
*/


function fetchLocation() {
  var postalCode = $("#name").val()
  $.get("http://hopper.wlu.ca/~choang/iPhone/http/getLocationFromFile.php?zip=" + postalCode, function(data) {
    alert("The postal code at " + postalCode + " is at:\n" + data);
  });
}

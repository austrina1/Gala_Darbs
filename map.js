var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.0519752, lng: -76.314270999999},
    zoom: 15 // typical is usually 8 or 9
  });
}// end initMap function

var check = function() {
  if (document.getElementById('psw').value ==
    document.getElementById('psw-repeat').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}
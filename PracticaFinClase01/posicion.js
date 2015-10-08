function posicion(pos) {
    document.getElementById("lat").innerHTML = pos.coords.latitude;

    document.getElementById("long").innerHTML = pos.coords.longitude;
    var pm = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + pm + "&zoom=16&size=400x400&sensor=false";
    document.getElementById("mapa").src = url;
   
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion,function(error) {
        alert("No puedo acceder a la Posicion");
    });
}

function ubicacion() {
    var pm = "40.380911" + "," + "-3.727739";
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + pm + "&zoom=16&size=400x400&sensor=false";
    document.getElementById("mapa2").src = url;
}

ubicacion();


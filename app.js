window.addEventListener('load', () => {
    let long, lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    } else {
        alert("Hey not working");
    }
})
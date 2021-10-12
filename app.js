window.addEventListener('load', () => {
    let long, lat,
        temperatureDescription = document.querySelector('.temperature-description'),
        temperatureDegree = document.querySelector('.temperature-degree'),
        locationTimezone = document.querySelector('.temperature-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            let myApi = `ad74905d96e028b53c9809aea1ca4261`;
            let itayApi = `2cae4caef40635500e6dd127a8ac9a9e`;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${itayApi}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const tempData = data.main;
                    const weatherCondition = data.weather[0].main.toUpperCase();
                    console.log(weatherCondition);

                    //set DOM elements from the API
                    temperatureDegree.textContent = tempData.temp;
                })
                .catch(error => {
                    console.log("Error:");
                    console.log(error);
                })
        });
    } else {
        alert("Hey not working");
    }

    function setIcons(icon, iconID) {
        const skycons = new skycons({ color: "white" });
    }
})
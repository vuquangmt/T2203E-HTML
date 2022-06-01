var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {//da gui len hoan thanh va nhan dc ket qua
        var currentWeater = JSON.parse(xhttp.responseText);
        console.log(currentWeater);
    }
};
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
xhttp.send();




// var currentWeather = {
//     coord: {
//         lon: 105.8412,
//         lat: 21.0245
//     },
//     weather: [
//         {
//             id: 500,
//             main: "Rain",
//             description: "light rain",
//             icon: 10n
//         }
//     ],
//     base: "stations",
//     main: {
//         temp: 27,
//         feels_like: 30.32,
//         temp_min: 27,
//         temp_max: 27,
//         pressure: 1002,
//         humidity: 86,
//         sea_level: 1002,
//         grnd_level: 1000
//     },
//     visibility: 10000,
//     wind: {
//         speed: 3.18,
//         deg: 117,
//         gust: 6.84
//     },
//     clouds: {
//         all: 98
//     },
//     dt: 1653912863,
//     sys: {
//         type: 1,
//         id: 9308,
//         country: "VN",
//         sunrise: 1653862511,
//         sunset: 1653910404
//     },
//     timezone: 25200,
//     id: 1581130,
//     name: "Hanoi",
//     cod: 200
// }
// var nd = document.getElementById("nhietdo");
//
//



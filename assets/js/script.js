$(document).ready(function () {
  // console.log("ready!!!");


    $("#weather-btn").on("click", function (event) {
    event.preventDefault();

    var cityInput = $("#weather-input").val().trim();
    console.log(cityInput);
    currentWeather()

    })
  function currentWeather() {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=tampa&appid=96c11cefb1ce135a21376c8104974b72",
    }).then(function (data) {
      console.log(data);
   
   
   
    })
  }
});


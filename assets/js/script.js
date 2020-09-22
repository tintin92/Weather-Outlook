$(document).ready(function () {
  // console.log("ready!!!");

  $("#weather-btn").on("click", function (event) {
    event.preventDefault();

    var cityInput = $("#weather-input").val().trim();
    console.log(cityInput);
    currentWeather(cityInput);
  });

  function currentWeather(city) {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=96c11cefb1ce135a21376c8104974b72&units=imperial",
    }).then(function (data) {
      console.log(data);
    });
  }
    function forecast() {
      $.ajax({
        method: "GET",
        url:
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=96c11cefb1ce135a21376c8104974b72&units=imperial",
      }).then(function (data) {
        console.log(data);
      });
    }
});

$(document).ready(function () {
  $("#weather-btn").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#weather-input").val().trim();

    console.log(userInput);
    currentWeather(userInput);
    //store whatever the user putsy in here we can run into our function which will trigger the function
    
    
    var recentBtn = $("<h4>");

    recentBtn.text(userInput);

    recentBtn.attr("value", userInput);

    recentBtn.attr("class", "pastSearch");

    $("#pastSearch").append(recentBtn);
  });

  $("#pastSearch").on("click", function (event) {
    event.preventDefault();
    console.log("click");
    var userInput = $(this).siblings().val();
    console.log(userInput);
  });

  function currentWeather() {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=tampa&appid=96c11cefb1ce135a21376c8104974b72",
    }).then(function (data) {
      console.log(data);
    });
  }
});

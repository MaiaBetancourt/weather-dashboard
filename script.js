$(document).ready(function () {
  // console.log(localStorage.getItem("last-search-city"));
  function getWeather(cityName) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=e23ebbd1d6aa5006fb9f4b969e7519e2";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);
      $(".city").text(response.name);
      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      $(".wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      console.log(tempF);
      $(".temperature").text("Temperature: " + tempF.toFixed(1) + " °F");
    });
  }

  function getForecast(cityName) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=e23ebbd1d6aa5006fb9f4b969e7519e2";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  }

  function getUV() {}

  getWeather(localStorage.getItem("last-search-city"));

  $("#find-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val();
    console.log(city);
    getWeather(city);
    getForecast(city);
    localStorage.setItem("last-search-city", city);
  });
});

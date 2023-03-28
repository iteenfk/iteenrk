const api_key = "50d4c65fa058ccffec4d18694c037a13"; // OpenWeatherMap API key
const cities = ["Fukuoka", "Kasuga", "Tokyo", "New York", "London", "Paris"]; // 都市名のリスト

const citySelect = document.getElementById("city-select");

// 都市名のリストをselect要素に追加する
cities.forEach(city => {
  const option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  citySelect.appendChild(option);
});

citySelect.addEventListener("change", () => {
  const city = citySelect.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // 天気情報を取得してから実行される処理
      console.log(data); // デバッグ用に取得したデータを表示

      const weather = data.weather[0].main;
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const windDirection = data.wind.deg;
      const pressure = data.main.pressure;
      const maxTemperature = data.main.temp_max;
      const minTemperature = data.main.temp_min;
      const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      const visibility = data.visibility;
      const clouds = data.clouds.all;
      const feelsLike = data.main.feels_like;

      // 取得した天気情報をHTMLに表示する
      const weatherBox = document.getElementById("weather-box");
      weatherBox.innerHTML = `
        <h3>${city}の天気情報</h3>
        <p>天気: ${weather} (${description})</p>
        <p>気温: ${temperature}℃</p>
        <p>湿度: ${humidity}%</p>
        <p>風速: ${windSpeed}m/s</p>
        <p>風向: ${windDirection}°</p>
        <p>気圧: ${pressure}</p>
        <p>最高気温: ${maxTemperature}℃</p>
        <p>最低気温: ${minTemperature}℃</p>
        <p>日の出時刻: ${sunriseTime}</p>
        <p>日没時刻: ${sunsetTime}</p>
        <p>視界: ${visibility}m</p>
        <p>雲量: ${clouds}%</p>
        <p>体感気温: ${feelsLike}℃</p>
      `;
    })
    .catch(error => console.error(error));
});

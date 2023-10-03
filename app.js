const form = document.querySelector("form");
const img = document.querySelector(".img");
const temp = document.querySelector(".temperature");
const place = document.querySelector(".place");
const humidity = document.querySelector(".humidity");
const speed = document.querySelector(".wind");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = form.elements.city.value;
  const report = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=175aa0bcdb7d462eba470200230310&q=${city}&aqi=no`
  );

  img.src = report.data.current.condition.icon;

  temp.innerText = report.data.current.temp_c + " ";

  place.innerText = report.data.location.name + "";

  humidity.innerText = report.data.current.humidity + " ";

  speed.innerText = report.data.current.wind_kph + " ";
});

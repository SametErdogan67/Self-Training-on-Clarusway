const cityInput = document.querySelector(".inputText");

const cityEnter = document.querySelector(".inputText");
cityEnter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    document.querySelector(".btn").click();
  }
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData(cityInput.value);
});

function getData(name) {
  const apiKey = "d0cdedf311595e6787a701b38eb9b472";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric&lang=tr`;

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like },
        weather: [{ description }],
      } = data;
      const city = document.querySelector("#sehir");
      const temperature = document.querySelector("#sicaklik");
      const weatherDesc = document.querySelector("#havaDurumu");
      const feel = document.querySelector("#hissedilen");
      city.textContent = `${name}, ${country}`;
      weatherDesc.textContent = `${description}`;
      temperature.textContent = `${temp}`;
      feel.textContent = `${feels_like}`;
    })
    .catch((err) => console.warn(err));
}

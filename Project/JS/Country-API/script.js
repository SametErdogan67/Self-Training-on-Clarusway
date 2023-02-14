setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if (hours > 12) {
    hours = hours - 12;
    day_night = "PM";
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time.textContent = `${hours}:${minutes}:${seconds}    ${day_night}`;
}, 1000);

const date = document.getElementById("date");
let date1 = new Date();
day = date1.getDay();
month = date1.getMonth();
year = date1.getFullYear();

if (day < 10) {
  day = `0${day}`;
}
if (month < 10) {
  month = `0${month}`;
}
let dayOfWeek = function () {
  let gunler = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return gunler[date1.getDay()];
};
console.log(dayOfWeek());
date.textContent = `${day}.${month}.${year} ${dayOfWeek()}`;

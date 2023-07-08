const hourElement = document.querySelector(".hour");
const dateElement = document.querySelector(".date");
const rootStyles = document.documentElement.style;

const date = new Date();

const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const getMinutes = minute => {
  if (minute < 10) {
    return `0${minute}`;
  } else {
    return minute;
  }
};

const calcHour = (hour, minute) => {
  let reducedHour = "";
  hour > 12 ? (reducedHour = hour - 12) : (reducedHour = hour);
  const hourTotal = reducedHour + minute / 60;
  const hourDeg = (hourTotal * 360) / 12 + "deg";
  rootStyles.setProperty("--hourDeg", hourDeg);
};

const calcMinutes = minute => {
  const minuteDeg = (minute * 360) / 60 + "deg";
  rootStyles.setProperty("--minuteDeg", minuteDeg);
};

const calcSeconds = (second, millisecond) => {
  const secondTotal = second + millisecond / 1000;
  const secondDeg = (secondTotal * 360) / 60 + "deg";
  rootStyles.setProperty("--secondDeg", secondDeg);
};

function showClock() {
  const date = new Date();
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();
  //Reloj analógico
  calcHour(hour, minute);
  calcMinutes(minute);
  calcSeconds(second, millisecond);

  //Reloj digital
  hourElement.textContent = `${hour}:${getMinutes(minute)}`;
  dateElement.textContent = `${dayArray[weekDay]} ${day} ${monthArray[month]} ${year}`;
}
showClock();
const intervalID = setInterval(() => {
  showClock();
}, 50);

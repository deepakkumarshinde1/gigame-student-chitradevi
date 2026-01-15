let counter = 0;
let spanElement = document.getElementById("timer");
let buttonElement = document.getElementById("inc");
let stopButtonElement = document.getElementById("stop");
let intervalId = null;

console.log("start");

buttonElement.addEventListener("click", () => {
  buttonElement.disabled = true;
  intervalId = setInterval(function () {
    console.log("interval");
    spanElement.innerHTML = counter;
    counter++;
  }, 100);
});

stopButtonElement.addEventListener("click", () => {
  buttonElement.disabled = false;
  clearInterval(intervalId);
});

console.log("end");
// onClick

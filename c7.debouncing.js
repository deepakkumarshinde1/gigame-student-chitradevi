// debouncing
// debounce is a technique to limit the rate at which a function is executed.

let input = document.querySelector("#searchBox");

function debounce(cb, time) {
  let timer = null;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(event);
    }, 1000);
  };
}
input.addEventListener(
  "keyup",
  debounce((event) => {
    console.log("Keyup");
  }, 1000),
);

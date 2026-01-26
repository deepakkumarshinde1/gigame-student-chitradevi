//

function throttle(cb, limit) {
  let isThrottle = true;
  return function (event) {
    if (isThrottle) {
      isThrottle = false;
      cb(event);
      setTimeout(() => {
        isThrottle = true;
      }, limit);
    }
  };
}
window.addEventListener(
  "scroll",
  throttle((event) => {
    console.log("scrolling");
  }, 1000),
);

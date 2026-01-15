async function div(a, b) {
  if (b === 0) {
    return Promise.reject("can't divide by zero");
  }
  let result = a / b;
  return Promise.resolve(result);
}
div(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function fun() {
  try {
    let result = await p1();
    let r2 = await p2(result);
    let r3 = await p3(r2);
    let r4 = await p4(r3);
  } catch (error) {
    console.log(error);
  }
}

fun();

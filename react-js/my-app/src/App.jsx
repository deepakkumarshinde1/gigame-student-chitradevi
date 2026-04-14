// comp

import { useState } from "react";
import ClassComp from "./ClassComp";
import { useDispatch } from "react-redux";
import { genOtp } from "./redux/users.slice";
import Login from "./Login";

// import ( optional )

// comp logic
function App() {
  let dispatch = useDispatch();
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => dispatch(genOtp("a"))}>Create OTP</button>
      <ClassComp text="Hello Chitra" />
      <Login />
    </>
  );
} // comp

// export
export default App;
//

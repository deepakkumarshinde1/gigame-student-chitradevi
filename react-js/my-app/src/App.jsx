// comp

import { useState } from "react";
import ClassComp from "./ClassComp";
import { useDispatch } from "react-redux";
import { genOtp } from "./redux/users.slice";
import Login from "./Login";
import UserList from "./UserList";
import InputFocus from "./components/InputFocus";
import { InputContextProvider } from "./context/input.context";

// import ( optional )

// comp logic
function App() {
  let dispatch = useDispatch();
  return (
    <>
      <InputContextProvider>
        <InputFocus />
      </InputContextProvider>
      {/* <h1>Hello</h1>
      <button onClick={() => dispatch(genOtp("a"))}>Create OTP</button>
      <ClassComp text="Hello Chitra" />
      <Login /> */}
      {/* <UserList /> */}
    </>
  );
} // comp

// export
export default App;
//

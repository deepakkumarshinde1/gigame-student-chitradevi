// comp

import { useState } from "react";
import ClassComp from "./ClassComp";

// import ( optional )

// comp logic
function App() {
  let [otp, setOtp] = useState(Math.round(Math.random() * 1000));

  let genOtp = () => {
    let newOTP = Math.round(Math.random() * 1000);
    setOtp(newOTP);
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={genOtp}>Create OTP</button>
      <ClassComp text="Hello Chitra" otp={otp} />
    </>
  );
} // comp

// export
export default App;
//

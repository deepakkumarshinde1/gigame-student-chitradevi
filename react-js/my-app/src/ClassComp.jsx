import { Component } from "react";
import { useSelector } from "react-redux";

function ClassComp() {
  let { otp } = useSelector((state) => state.userSlice);
  return (
    <>
      <h1>OTP is : {otp}</h1>
    </>
  );
}

export default ClassComp;

// So in the next lecture we will discuss
// regarding the component did catch, okay,
// then should component update and pure components in the class components.
// Okay, then we will move forward with the concept that is called as a routing in React.

// Pure Component is a component that does not re-render if the props and state are the same. It is a performance optimization technique in React. It is implemented by extending the React.PureComponent class instead of React.Component. The PureComponent class implements the shouldComponentUpdate() method with a shallow prop and state comparison, which means that it will only re-render if the props or state have changed. This can help to improve the performance of your application by preventing unnecessary re-renders.

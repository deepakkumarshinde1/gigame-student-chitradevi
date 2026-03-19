import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Deepakkumar",
      count: 0,
      otp: this.props.otp,
    };
  }

  static getDerivedStateFromProps(newProps, oldState) {
    return {
      ...oldState,
      otp: newProps.otp,
    };
  }
  // react lifecycle
  // mounting
  componentDidMount() {
    // api call
  }

  // unmounting
  componentWillUnmount() {}

  // updating
  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1>Hello, {this.state.name}</h1> <h1>{this.props.text}</h1>
        <h1>OTP is : {this.state.otp}</h1>
      </>
    );
  }
}

export default ClassComp;

// So in the next lecture we will discuss
// regarding the component did catch, okay,
// then should component update and pure components in the class components.
// Okay, then we will move forward with the concept that is called as a routing in React.

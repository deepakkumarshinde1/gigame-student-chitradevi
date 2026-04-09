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

  componentDidCatch(error, info) {}
  shouldComponentUpdate(nextProps, nextState) {
    // do we need to update the component or not
    // if we return true then the component will update otherwise it will not update
    return true;
  }
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

// Pure Component is a component that does not re-render if the props and state are the same. It is a performance optimization technique in React. It is implemented by extending the React.PureComponent class instead of React.Component. The PureComponent class implements the shouldComponentUpdate() method with a shallow prop and state comparison, which means that it will only re-render if the props or state have changed. This can help to improve the performance of your application by preventing unnecessary re-renders.

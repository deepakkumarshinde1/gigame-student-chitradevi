// comp
import React from "react";
import { useDispatch } from "react-redux";
import { handelLoginDetails } from "./redux/forms.slice";

function Login() {
  let dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="Enter UserName"
        name="userName"
        onChange={(event) =>
          dispatch(
            handelLoginDetails({
              value: event.target.value,
              name: event.target.name,
            }),
          )
        }
      />
      <input
        type="text"
        placeholder="Enter UserName"
        name="password"
        onChange={(event) =>
          dispatch(
            handelLoginDetails({
              value: event.target.value,
              name: event.target.name,
            }),
          )
        }
      />
    </>
  );
}

export default Login;

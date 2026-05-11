import React, { memo } from "react";
import { useInputContext } from "../context/input.context";

function InputComp(s) {
  let { getValue } = useInputContext();
  //   console.log("Hello");
  return (
    <>
      <hr />
      <button onClick={getValue}>Get Value</button>
    </>
  );
}

export default memo(InputComp);

// pure component

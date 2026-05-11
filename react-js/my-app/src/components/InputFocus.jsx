import React, { useCallback, useRef, useState } from "react";
import InputComp from "./InputComp";
import { useInputContext } from "../context/input.context";

function InputFocus() {
  let { inputRef, focusInput, incOne, count } = useInputContext();

  // function complex logic
  // each time

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <button onClick={incOne}>INC {count}</button>
      <InputComp />
    </>
  );
}

export default InputFocus;

// memo => memorization of component
// useMemo => memorization of value
// useCallback => memorization of function

import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";
import { useCounterReducer } from "./reducers/counter.reducer";

let InputContext = createContext({});

// consume context
export const useInputContext = () => {
  const context = useContext(InputContext);
  return context;
};

// logic => wrapper component
export const InputContextProvider = ({ children }) => {
  const inputRef = useRef();
  const [state, dispatch] = useCounterReducer();

  const incOne = () => {
    dispatch({ type: "INC_ONE" });
  };
  const incTwo = () => {
    dispatch({ type: "INC_TWO" });
  };
  const incThree = () => {};

  const focusInput = () => {
    inputRef.current.focus();
  };

  const getValue = useCallback(() => {
    alert(inputRef.current.value);
    inputRef.current.value = "Deepakkumar";
    inputRef.current.style.backgroundColor = "red";
  }, []);
  const shared = {
    inputRef,
    getValue,
    focusInput,
    count: state.count,
    incOne,
  };
  return (
    <>
      <InputContext.Provider value={shared}>{children}</InputContext.Provider>
    </>
  );
};

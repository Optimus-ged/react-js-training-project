import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/counter/counterSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function CounterComponent() {
  const counter = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(25))}>
        Increment by amount
      </button>
    </div>
  );
}

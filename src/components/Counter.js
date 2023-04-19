import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler =()=>{
    dispatch(counterActions.increase(10))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increaseHandler}>INCREASE BY 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

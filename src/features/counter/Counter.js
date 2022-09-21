import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import style from "./Counter.module.css";

const Counter = () => {
    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [ incrementAmount, setIncrementAmount ] = useState(0);

    const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset());
    }

  return (
    <section>
      <p>Counter : {counter}</p>
      <div>
        <button className={style.btn} onClick={() => dispatch(increment())}>+</button>
        <button className={style.btn} onClick={() => dispatch(decrement())}>-</button>
        <button className={style.btn} onClick={resetAll}>Reset</button>
        <input 
          type="number" 
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(parseInt(incrementAmount)))}>AddAmount</button>
      </div>
    </section>
  )
}

export default Counter
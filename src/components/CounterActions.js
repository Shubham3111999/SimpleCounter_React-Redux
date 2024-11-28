import { useSelector,useDispatch } from "react-redux";
// add action creators imports here
import {increment,decrement,reset} from "../redux/actions/counterActions"

export const CounterActions = () => {
  const { count } = useSelector((state) => state.counterReducer);

  const dispatch =useDispatch();

  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button disabled={count <= 0} onClick={()=>dispatch(decrement())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button disabled={count >= 10} onClick={()=>dispatch(increment())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={()=>dispatch(reset())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};

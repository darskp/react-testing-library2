import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/action";

const Counter = () => {
    let count = useSelector((store) => store.count);
    let actionIncre = useDispatch();

    return (
        <div className = "container">
            <div>
                <h1>Count value={count}</h1>
            </div>
            <div className="btns">
                <button onClick={() => actionIncre(increment(count))}>INCRE</button>
                <button onClick={() => actionIncre(decrement(count))}>DECRE</button>
                <button onClick={() => actionIncre(reset(count))}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;
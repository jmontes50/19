import { increment, decrement } from "./app/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state);
    console.log(count);

    return (
        <div>Counter</div>
    )
}

export default Counter
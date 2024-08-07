import { increment, decrement, setOneHundred } from "./app/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    // console.log(count);

    const dispatch = useDispatch();//me va a permitir disparar un acción dentro del store

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleSetOneHundred = () => {
        dispatch(setOneHundred())
    }

    return (
        <>
            <div>Contador: {count}</div>
            <button onClick={handleIncrement}>
                Incrementar
            </button>
            <button onClick={handleDecrement}>
                Reducir
            </button>
            <button onClick={handleSetOneHundred}>
                Cambiar a 100
            </button>
        </>
    )
}

export default Counter
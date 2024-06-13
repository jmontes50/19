import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const change = () => {
        setCounter(counter + 1);
    }

    return { counter, change };
    // return { counter:counter, change:change}
}

export default useCounter;
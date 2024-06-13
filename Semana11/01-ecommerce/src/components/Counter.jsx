import useCounter from "../hooks/useCounter"

const Counter = () => {
  const { counter, change } = useCounter();


  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={change}>Aumentar</button>
    </div>
  )
}

export default Counter
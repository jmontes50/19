import Counter from "./Counter"
import ListUsers from "./ListUsers"

const App = () => {
  return (
    <div>
      App
      <hr />
      <Counter />
      <hr/>
      <h2>Usuarios</h2>
      <ListUsers />
    </div>
  )
}

export default App
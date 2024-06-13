import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductView from "./views/AllProductView";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <Router>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<AllProductView />} />
      </Routes>
    </Router>
  )
}

export default App
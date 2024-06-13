import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductView from "./views/AllProductView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductView />} />
      </Routes>
    </Router>
  )
}

export default App
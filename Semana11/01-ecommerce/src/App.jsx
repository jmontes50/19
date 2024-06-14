import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import AllProductView from "./views/AllProductView";
import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        {/* <Counter /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProductView />} />
        </Routes>
      </CartContextProvider>
    </Router>
  )
}

export default App
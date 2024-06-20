import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import AllProductView from "./views/AllProductView";
import ProductDetailView from "./views/ProductDetailView";
import LoginView from "./views/LoginView";

// import Counter from "./components/Counter";

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        {/* <Counter /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProductView />} />
          <Route path="/product/:id" element={<ProductDetailView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </CartContextProvider>
    </Router>
  )
}

export default App
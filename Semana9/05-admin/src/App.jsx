// as es un alias, ProductViewforSaleWithCredit as ProductView
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView"
import Navigation from "./components/Navigation"
import CreateProductView from "./views/CreateProductView"

const App = () => {
  return (
    <Router>
      <Navigation /> {/**Siempre se va a mostrar */}
      {/* Routes definiremos nuestras rutas */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
      </Routes>
      {/* <CreateProductView /> */}
    </Router>
  )
}

export default App
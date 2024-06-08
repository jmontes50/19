// as es un alias, ProductViewforSaleWithCredit as ProductView
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import Navigation from "./components/Navigation";
import CreateProductView from "./views/CreateProductView";
import EditProductView from "./views/EditProductView";

const App = () => {
  return (
    <Router>
      <Navigation /> {/**Siempre se va a mostrar */}
      {/* Routes definiremos nuestras rutas */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
        {/* al poner en path /:algo estoy indicando que eso sera info que llegara al componente */}
        <Route path="/editproduct/:id" element={<EditProductView />} />
      </Routes>
      {/* <CreateProductView /> */}
    </Router>
  )
}

export default App;
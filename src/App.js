import "./styles.css";

import Header from "./Components/Header";
// import ProductList from "./Components/ProductList";
// import TheGeneric from "./Components/TheGeneric";
import { CartProvider } from "./Components/CartContext";
// import About from "./Components/About";
// import Store from "./Components/Store";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        {/* <TheGeneric />
        <ProductList /> */}
        {/* <Cart /> */}
        {/* <Store /> */}
        {/* <About /> */}
        <AllRoutes />
        {/* <Home/> */}
      </CartProvider>
    </div>
  );
}

export default App;

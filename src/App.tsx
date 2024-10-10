import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/card/Card";
import Like from "./routes/like/Like";
import Details from "./routes/details/Details";
import ProductList from "./components/category/ProductList";
import MainComponent from "./components/loading/MainComponent";

function App() {
  return (
    <>
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Like />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainComponent>
    </>
  );
}

export default App;

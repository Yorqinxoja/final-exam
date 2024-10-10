import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/card/Card";
import Like from "./routes/like/Like";
import Deatels from "./routes/details/Details";
import MainComponent from "./components/loading/MainComponent";

function App() {
  return (
    <>
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/like" element={<Like />} />
          <Route path="/details/:productId" element={<Deatels />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainComponent>
    </>
  );
}

export default App;

// import Home from "./routes/home/Home"
// import { Route, Routes } from "react-router-dom"
// import Cart from "./routes/cart/Cart"
// import Like from "./routes/like/Like"
// import Deatels from "./routes/details/Deatels"

// function App() {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/like" element={<Like />} />
//         <Route path='/details/:productId' element={<Deatels />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </>
//   )
// }

// export default App


import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/cart/Cart";
import Like from "./routes/like/Like";
import Deatels from "./routes/details/Deatels";
import MainComponent from "./components/MainComponent"; // Adjust the path based on your structure

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

import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import ProdDetail from "./components/ProdDetail";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 720 ? true : false
  );

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);
  // Save cart items to local storage when the cart items state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(_id) {
    // only add cart if it is not already in the cart
    if (!cartItems.includes(_id)) {
      setCartItems([...cartItems, _id]);
    }
    // have cart items store to localstorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  //choose the screen size
  function handleResize() {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header isMobile={isMobile} cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/audio/:id"
            element={<ProdDetail addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 720 ? true : false
  );

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
        <Header isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

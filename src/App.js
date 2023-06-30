import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Views/Homepage/Homepage";
import About from "./components/Views/About/About";
import Gallery from "./components/Views/Gallery/Gallery";
import Contact from "./components/Views/Contact/Contact";

import Footer from "./components/Footer/Footer";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Views/Homepage/Homepage";
import About from "./components/Views/About/About";
import Gallery from "./components/Views/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

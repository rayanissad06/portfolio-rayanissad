import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Projectone from "./Pages/Home/Projectone";
import Projecttwo from "./Pages/Home/Projecttwo";
import Homepage from "./Pages/Home/Homepage";
import Testimonialpage from "./Pages/Home/Testimonialpage";
import Contactpage from "./Pages/Home/Contactpage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Homepage />} />
            <Route path="project_1" element={<Projectone />} />
            <Route path="project_2" element={<Projecttwo />} />
            <Route path="testimonials" element={<Testimonialpage />} />
            <Route path="contact" element={<Contactpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

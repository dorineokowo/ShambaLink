import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Signup from "./components/Signup";
import Market from "./components/Market";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/market" element={<Market />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/market" element={<Market />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/nav/nav";
import LandingPage from "./pages/landing page/landing";
import Footer from "./components/footer/footer";

import Product2 from "./pages/product-2/product-2";
import Product3 from "./pages/product-3/product-3";
import Product4 from "./pages/product-4/product-4";
import VisionMission from "./pages/vision-and-mission/vision-mission";
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/vision-and-mission' element={<VisionMission/>} />
          <Route path='/p2' element={<Product2 />} />
          <Route path='/p3' element={<Product3 />} />
          <Route path='/p4' element={<Product4 />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

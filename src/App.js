import React from "react";

import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/nav/nav";
import LandingPage from "./pages/landing page/landing";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

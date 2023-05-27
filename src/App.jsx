import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Building from './pages/building';
import Floor from "./pages/floor";
import Room from "./pages/room";

// Manage pages
import Manage from "./pages/manage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="building/:buildingId" element={<Building />}></Route>
        <Route path="building/:buildingId/:floorId" element={<Floor />}></Route>
        <Route path="building/:buildingId/:floorId/:roomId" element={<Room />}></Route>

        {/* Manage Page */}
        <Route exact path="manage" element={<Manage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState, useContext } from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { News } from "./pages/News";
import { Profile } from "./pages/Profile";

function NoMatch() {
  return (
    <div>
      <h2>404: Page Not Found</h2>
      <p>This page does not exists, sorry!</p>
    </div>
  );
}

const profile_picture= "https://randomuser.me/api/portraits/men/1.jpg"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <Navbar image={profile_picture} />
    </div>
  );
}

export default App;

// import { useState } from "react";

import "../src/css/App.css";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;

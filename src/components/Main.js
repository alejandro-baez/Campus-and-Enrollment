import React from "react";
import { Route, Routes } from "react-router-dom";
import Campuses from "./Campuses";
import Students from "./Students";
import Navbar from "./Navbar";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import Homepage from "./Homepage";
import Footer from "./Footer";

/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/campuses/:id" element={<SingleCampus />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<SingleStudent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Main;

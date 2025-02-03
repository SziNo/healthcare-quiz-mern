import React from "react";
import { Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "./layout/navbar";
import { Admin, Register, Login } from "@/pages";
import "./index.css";

const Home = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <Button variant="default" size="default">
      Click me
    </Button>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

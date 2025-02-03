import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import { Admin, Register, Login, Home } from "@/pages";
import { checkTokenExpiration } from "@/utils/auth";
import "./index.css";

const App = () => {
  useEffect(() => {
    checkTokenExpiration();
  }, []);

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

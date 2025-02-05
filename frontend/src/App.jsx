import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./layout";
import {
  Admin,
  QuizQuestion,
  Register,
  Login,
  Home,
  Quiz,
  ThankYou,
} from "@/pages";
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
        <Route path="/admin/quiz/:type" element={<QuizQuestion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:type" element={<Quiz />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

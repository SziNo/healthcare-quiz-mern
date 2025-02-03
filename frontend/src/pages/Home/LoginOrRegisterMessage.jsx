import React from "react";
import { Link } from "react-router-dom";

const LoginOrRegisterMessage = () => (
  <div className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg text-center">
    <p className="text-lg font-medium mb-4 text-gray-700">
      Kérjük, hogy a kérdőívek kitöltéséhez{" "}
      <Link
        to="/register"
        className="text-blue-600 font-semibold hover:text-blue-800 underline transition duration-200 ease-in-out"
      >
        regisztráljon
      </Link>{" "}
      vagy{" "}
      <Link
        to="/login"
        className="text-blue-600 font-semibold hover:text-blue-800 underline transition duration-200 ease-in-out"
      >
        jelentkezzen be
      </Link>
      .
    </p>
  </div>
);

export default LoginOrRegisterMessage;

import React from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/zustandStore";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const isAdmin = useStore((state) => state.isAdmin);
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-md ">
      <div className="mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/red-cross.ico"
              alt="Home"
              className="h-8 w-8 transition-transform transform hover:scale-95"
            />
          </Link>
          {isAdmin && (
            <Link
              to="/admin"
              className="uppercase text-xs sm:text-sm text-red-700 font-bold hover:text-green-600 hover:underline transition duration-300 ease-in-out"
            >
              admin felület
            </Link>
          )}
        </div>
        <div className="nav-links flex space-x-4 sm:space-x-8">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="uppercase text-xs sm:text-sm text-gray-700 font-bold hover:text-blue-600 hover:underline transition duration-300 ease-in-out"
              >
                regisztráció
              </Link>
              <Link
                to="/login"
                className="uppercase text-xs sm:text-sm text-gray-700 font-bold hover:text-blue-600 hover:underline transition duration-300 ease-in-out"
              >
                bejelentkezés
              </Link>
            </>
          ) : (
            <Link
              to="/"
              className="uppercase text-xs sm:text-sm text-gray-700 font-bold hover:text-blue-600 hover:underline transition duration-300 ease-in-out"
              onClick={logout}
            >
              kijelentkezés
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

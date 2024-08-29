import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  return (
    <nav className="flex flex-row justify-between items-center bg-slate-500 p-2 m-3 border- rounded-md">
      <button
        className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
        onClick={() => navigate("/")}
      >
        Dashboard
      </button>
      {/* {user && (
        <button
          className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
          onClick={() => navigate("/")}
        >
          {user}
        </button>
      )} */}
      {user && (
        <button
          className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
          onClick={() => {
            localStorage.clear();
            navigate("/signin");
          }}
        >
          Sign Out
        </button>
      )}
      {!user && (
        <button
          className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      )}
      {!user && (
        <button
          className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      )}
    </nav>
  );
}

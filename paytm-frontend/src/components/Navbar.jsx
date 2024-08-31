import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function Navbar() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
  const user =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  console.log(user);
  const userId = localStorage.getItem("userId");
  const list = [
    { value: "user", label: firstName },
    { value: "update", label: "Update Details" },
    { value: "signout", label: "Sign Out" },
  ];

  useEffect(() => {
    // window.location.reload();
  })
  function handleUser(data) {
    console.log(data);
    if (data.value == "update") {
      navigate("/update");
    } else if (data.value == "signout") {
      localStorage.clear();
      window.location.href = "/signin";
    } else if (data.value == "user") {
      navigate("/");
    }
  }
  return (
    <nav className="flex flex-row justify-between items-center bg-slate-200 p-2 m-3 border- rounded-md">
      <button
        className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
        onClick={() => navigate("/")}
      >
        Payment App
      </button>

      {userId && (
        <Select
          className="w-[15%]"
          onChange={handleUser}
          options={list}
          defaultValue={{ value: "user", label: firstName }}
        />
      )}
    </nav>
  );
}

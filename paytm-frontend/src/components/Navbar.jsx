import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function Navbar() {
  const navigate = useNavigate();
  const user =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const userId = localStorage.getItem("userId");
  const [drop, setDrop] = useState(false);
  
  return (
    <nav className="flex flex-row justify-between items-center bg-slate-200 p-2 m-3 border- rounded-md">
      <button
        className="m-2 bg-gray-200 border-solid border-2 rounded-md border-sky-500 p-3"
        onClick={() => navigate("/")}
      >
        Payment App
      </button>

      {userId && (
        <div>
          <button
            id="dropdownDefaultButton"
            onClick={() => setDrop(prev => !prev)}
            onMouseEnter={() => setDrop(true)}
            onBlur={()=>setDrop(false)}
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5"
          >
            {user}
          </button>

          <div
            id="dropdownId"
            className={`${drop ? '' : "hidden"} fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            onMouseEnter={()=>setDrop(true)}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="update"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Update Details
                </a>
              </li>
              <li>
                <a
                  onClick={() => { localStorage.clear(); navigate("signin")}}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

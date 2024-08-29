import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../config";
import axios from "axios";
import UsersList from "../components/UsersList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [usersList, setUsersList] = useState();
  const [balance, setBalance] = useState();
  const user = localStorage.getItem("user");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function fetchUsers() {
    const result = await axios.get(ENDPOINT + "api/v1/user/", {
      headers: {
        token: token,
      },
    });
    setUsersList(result.data.users);
  }

  async function checkBalance() {
    const result = await axios.get(ENDPOINT + "api/v1/account/balance", {
      headers: {
        token: token,
      },
    });
    setBalance(result.data.balance);
  }
  useEffect(() => {
    if (!user) {
      alert("Please signin first!");
      navigate("/signin");
    }
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between items-center p-5 w-[60%] m-3 border-solid border-2 rounded-lg">
        <h3>{user}</h3>
        <button className="border-2 rounded-md p-2 m-2" onClick={checkBalance}>
          {balance ? <span>&#8377;{balance.toFixed(2)}</span> : "Check Balance"}
        </button>
      </div>
      <div className="flex flex-col justify-between items-center">
        {usersList &&
          usersList.map((user, index) => {
            if (user._id != userId)
              return <UsersList key={index} user={user} />;
          })}
      </div>
    </div>
  );
}

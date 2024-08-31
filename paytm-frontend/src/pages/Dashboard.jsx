import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../config";
import axios from "axios";
import UsersList from "../components/UsersList";
import { useLocation, useNavigate } from "react-router-dom";
import SearchUser from "../components/SearchUser";
import { toast } from "react-toastify";


export default function Dashboard() {
  const [usersList, setUsersList] = useState();
  const [balance, setBalance] = useState();
  const user =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  async function fetchUsers() {
    const result = await axios.get(ENDPOINT + `api/v1/user?filter=${filter}`, {
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
    if (!userId) {
      toast("Please signin first!");
      navigate("/signin");
    }
    checkBalance();
    fetchUsers();
  }, [filter]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between items-center p-5 w-[60%] m-3 border-solid border-2 rounded-lg">
        <p className="bg-slate-500 rounded text-white p-1 pr-2 pl-2 m-1">
          {user}
        </p>
        {balance && <span>Account Balance : &#8377;{balance.toFixed(2)}</span>}
      </div>
      <div>
        <SearchUser setFilter={setFilter} />
      </div>
      <div className="flex flex-col justify-between items-center">
        {usersList &&
          usersList.map((user, index) => {
            if (user._id != userId)
              return <UsersList key={index} user={user} />;
            else {
              localStorage.setItem("firstName", user.firstName);
              localStorage.setItem("lastName", user.lastName);
            }
          })}
      </div>
    </div>
  );
}

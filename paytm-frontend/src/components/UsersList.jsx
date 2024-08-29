import React, { useState } from "react";
import { createPortal } from "react-dom";
import SendMoney from "../modal/SendMoney";

export default function UsersList({ user }) {
  const [flag, setFlag] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center m-3 w-[150%] border-solid border-2 rounded-md border-sky-500 p-1">
      <h3 className="m-1  bg-gray-200 rounded-md border-sky-500 p-2">
        {user.firstName}
      </h3>
      <button
        className="m-1 bg-gray-200 border-solid border-2 rounded-md border-blue-300 p-1"
        onClick={() => setFlag(true)}
      >
        Send Money
      </button>
      {flag &&
        createPortal(
          <SendMoney user={user} setFlag={setFlag}/>,
          document.body
        )}
    </div>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ENDPOINT } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Update() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  async function handleForm(data) {
    console.log(data);
    await axios
      .put(ENDPOINT + "api/v1/user/update", data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        console.log(result.data);
        toast(result.data.message);
        if (result.data.success) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <input
          className="border-2 rounded-md p-1 m-1"
          type="email"
          placeholder="Email"
          {...register("email")}
        /> */}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleForm)}
      >
        <label>
          First Name:
          <input
            className="border-2 rounded-md p-1 m-5"
            type="text"
            defaultValue={localStorage.getItem("firstName")}
            placeholder="Firstname"
            {...register("firstName")}
          />
        </label>
        <label>
          Last Name:
          <input
            className="border-2 rounded-md p-1 m-5"
            type="text"
            defaultValue={localStorage.getItem("lastName")}
            placeholder="Lastname"
            {...register("lastName")}
          />
        </label>
        {/* <input
          className="border-2 rounded-md p-1 m-1"
          type="password"
          placeholder="Password"
          {...register("password")}
        /> */}
        <button className="bg-slate-600 text-white border-2 rounded-md p-1 m-2 w-[70%]">
          Update Details
        </button>
      </form>
    </div>
  );
}

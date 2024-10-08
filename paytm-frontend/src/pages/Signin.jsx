import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ENDPOINT } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LocalStorageSave } from "../services/LocalStorageSave";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";


export default function Signin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleForm(data) {
    const result = await axios.post(ENDPOINT + "api/v1/user/signin/", data);
    // alert(result.data.message);
    toast(result.data.message);
    if (result.data.success) {
      LocalStorageSave({ result });
        navigate("/")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleForm)}
      >
        <input
          className="border-2 rounded-md p-1 m-1"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="border-2 rounded-md p-1 m-1"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="bg-slate-600 text-white border-2 rounded-md p-1 m-2 w-[70%]" type="submit">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <button className="text-red-700 underline" onClick={() => navigate("/signup")}>
          Sign Up
        </button>{" "}
      </p>
    </div>
  );
}

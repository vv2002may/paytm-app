import React from "react";
import { useForm } from "react-hook-form";
import { ENDPOINT } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleForm(data) {
    const result = await axios.post(ENDPOINT + "api/v1/user/signup/", data);
    // console.log(result.data);
    alert(result.data.message);
    if (result.data.success) {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", result.data.user.firstName);
      localStorage.setItem("userId", result.data.user._id);
      navigate("/");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-medium m-4">Sign Up</h1>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleForm)}
      >
        <input
          className="border-2 rounded-md p-1 m-1"
          type="text"
          placeholder="Firstname"
          {...register("firstName")}
        />
        <input
          className="border-2 rounded-md p-1 m-1"
          type="text"
          placeholder="Lastname"
          {...register("lastName")}
        />
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
        <input className="border-2 rounded-md p-2 m-2" type="submit" />
      </form>
    </div>
  );
}

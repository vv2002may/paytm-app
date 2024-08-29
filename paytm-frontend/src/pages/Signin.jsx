import React from "react";
import { useForm } from "react-hook-form";
import { ENDPOINT } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleForm(data) {
    console.log(data);
    const result = await axios.post(ENDPOINT + "api/v1/user/signin/", data);
    console.log(result.data);
    if (result.data.success) {
      localStorage.setItem("token", result.data.token);
       localStorage.setItem("user", result.data.user.firstName);
       localStorage.setItem("userId", result.data.user._id);
      alert(result.data.message);
      navigate("/");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-medium m-4">Sign In</h1>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(handleForm)}>
        <input className="border-2 rounded-md p-1 m-1" type="email" {...register("email")} />
        <input className="border-2 rounded-md p-1 m-1" type="password" {...register("password")} />
        <input className="border-2 rounded-md p-2 m-2" type="submit" />
      </form>
    </div> 
  );
}

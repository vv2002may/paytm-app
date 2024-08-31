import React from "react";
import { useForm } from "react-hook-form";

export default function SearchUser({setFilter}) {
  const { register, handleSubmit } = useForm();

   function handleFilter(data) {
      console.log(data.search);
      setFilter(data.search);
   }
   
  return (
    <div>
        <form
           className="flex flex-row justify-center items-center"
           onSubmit={handleSubmit(handleFilter)}
        >
        <input
          className="border-2 rounded-md p-1 m-1"
          type="text"
          placeholder="Type to Search"
          {...register("search")}
        />
        <button className="border-2 rounded-md p-1 m-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

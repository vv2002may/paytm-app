import { ENDPOINT } from "../config";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SendMoney({checkBalance, user, setFlag }) {
  const { register, handleSubmit } = useForm();

  async function handleSendMoney(data) {
       await axios.put(
        ENDPOINT + "api/v1/account/transfer",
        {
          to: user._id,
          amount: data.amount,
        },
        {
          headers: { token: localStorage.getItem("token") },
        }
       )
         .then(result => {
           console.log(result);
           alert(result.data.message);
           if (result.data.success)
             window.location.reload();
         })
         .catch(err => {
          console.log(err.response.data);
          alert(err.response.data.message);
         })
    setFlag(false);
  }
  return (
    <div className="fixed top-0  w-[100%] h-[100%] border-solid border-2 rounded-md">
      <div className="flex flex-col justify-center items-center backdrop-blur  h-[30%] w-[20%] mt-[10%] ml-[40%] border">
        <button
          onClick={()=>setFlag(false)}
          className="hover:bg-gray-500 hover:text-white border border-black rounded p-1 m-1">Close</button>
        <p className="text-green-600 font-semibold font-mono m-5">
          Send Money To {user.firstName} {user.lastName}
        </p>
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit(handleSendMoney)}
        >
          <input
            className="border rounded-md border-green-300 p-1 m-.5"
            type="Number"
            placeholder="Enter a Amount"
            {...register("amount", {
              required: true,
            })}
          />
          <button className="border rounded-md border-green-300 p-1 m-1" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

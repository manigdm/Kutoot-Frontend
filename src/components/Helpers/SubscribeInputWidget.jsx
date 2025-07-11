import { useState } from "react";
import apiRequest from "../../../utils/apiRequest";
import { toast } from "react-toastify";
import ServeLangItem from "./ServeLangItem";

function SubscribeInputWidget(props) {
  const [email, setEmail] = useState("");
  const subscribehandler = () => {
    apiRequest
      .subscribeRequest({ email: email })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response && err.response.data.message);
      });
  };
  return (
    <div
      className="sm:w-[543px] w-[300px] h-[54px] flex"
    >
      <div className="flex-1 bg-white ltr:pl-4 rtl:pr-4 flex rtl:space-x-reverse space-x-2 items-center h-full focus-within:text-qyellow text-qblack rounded">
        <input
          type="email"
          name="email"
          className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack font-400 tracking-wider rounded"
          placeholder="EMAIL ADDRESS"
          onChange={(e) => setEmail(e.target.value.trim())}
          value={email}
        />
        <button
          onClick={subscribehandler}
          type="button"

          className="w-[200px] orange-btn text-sm font-600 rounded"
          style={{ padding: "16px 8px" }}
        >
          {ServeLangItem()?.Get_the_Coupon}
        </button>
      </div>
      {/* <span>
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 4L8.5 8.5L14 4"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </span> */}
    </div>
  );
}

export default SubscribeInputWidget;

import { useContext } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import InputCom from "../../Helpers/InputCom";
import LoaderStyleOne from "../../Helpers/Loaders/LoaderStyleOne";
import ServeLangItem from "../../Helpers/ServeLangItem";
import LoginContext from "../../Contexts/LoginContext";

const SEND = ({ action }) => {
  return (
    <div>
      <p className="text-xs text-qblack">
        Please verify your acount. If you didnt get OTP, please resend your OTP
        and verify
      </p>
      <button
        type="button"
        onClick={action}
        className="text-sm text-blue-500 font-bold mt-2"
      >
        Send OTP
      </button>
    </div>
  );
};

function LoginWidget({ redirect = true, notVerifyHandler }) {
  const router = useRouter();
  
  const loginPopupBoard = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
  const sendOtpHandler = () => {
    apiRequest
      .resend({
        email: email,
      })
      .then(() => {
        router.push(`/verify-you?email=${email}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    // Validates international phone numbers starting with + and containing 8-15 digits
    const mobileRegex = /^\+[1-9]\d{7,14}$/;
    return mobileRegex.test(mobile);
  };
  const doLogin = async () => {
    // Validate empty fields
    if (!email) {
      toast.error("Please enter both email/phone");
      return;
    }

    // Validate email/mobile format
    if (!validateEmail(email) && !validateMobile(email)) {
      toast.error("Please enter a valid email address or phone number");
      return;
    }

    setLoading(true);
    await apiRequest
      .login({
        email: email,
        password: "1234",
      })
      .then((res) => {
        setLoading(false);
        toast.success("OTP sent to your email");
        setEmail("");
        if (redirect) {
          router.push("/verify-otp?email=" + email);
        } else {
          if (res.data) {
            loginPopupBoard.handlerPopup(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          if (
            err.response.data.notification ===
            "Please verify your acount. If you didn't get OTP, please resend your OTP and verify"
          ) {
            toast.warn(<SEND action={sendOtpHandler} />, {
              autoClose: false,
              icon: false,
              theme: "colored",
            });
            notVerifyHandler();
          } else {
            toast.error(ServeLangItem()?.Invalid_Credentials);
          }
        } else {
          return false;
        }
        console.log(err);
      });
  };
  
  return (
    <div className="w-full">
      <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
        <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
          {ServeLangItem()?.Log_In}
        </h1>
        <div className="shape -mt-6">
          <svg
            width="172"
            height="29"
            viewBox="0 0 172 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
              stroke="#FCBF49"
            />
          </svg>
        </div>
      </div>
      <div className="input-area">
        <div className="input-item mb-5">
          <InputCom
            placeholder={ServeLangItem()?.Email_or_Phone + " (+Country Code)"}
            label={ServeLangItem()?.Email_or_Phone + "*"}
            name="email"
            type="text"
            inputClasses="h-[50px]"
            inputHandler={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="forgot-password-area flex justify-between items-center mb-7">
          <div className="remember-checkbox flex items-center space-x-2.5 rtl:space-x-reverse">
            <button
              onClick={rememberMe}
              type="button"
              className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
            >
              {checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <span onClick={rememberMe} className="text-base text-black">
              {ServeLangItem()?.Remember_Me}
            </span>
          </div>
        </div>
        <div className="signin-area mb-3.5">
          <div className="flex justify-center">
            <button
              onClick={doLogin}
              type="button"
              className="black-btn mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
            >
              <span>{ServeLangItem()?.Login}</span>
              {loading && (
                <span className="w-5 " style={{ transform: "scale(0.3)" }}>
                  <LoaderStyleOne />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWidget;

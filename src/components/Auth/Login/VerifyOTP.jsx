import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import apiRequest from "../../../../utils/apiRequest";
import { toast } from "react-toastify";
import LoginLayout from "./LoginLayout";
import { useSelector } from "react-redux";
import InputCom from "../../Helpers/InputCom";
import { useDispatch } from "react-redux";
import { fetchWishlist } from "../../../store/wishlistData";

const VerifyOtp = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [imgThumb, setImgThumb] = useState(null);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleVerify = () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    setLoading(true);
    apiRequest
      .verifyOTP({ identifier: email, otp: parseInt(otp) })
      .then((res) => {
        toast.success("Account verified successfully");
        localStorage.removeItem("auth");
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch(fetchWishlist());
        setTimeout(() => router.push("/"), 1000);
      })
      .catch((err) => {
        toast.error("Invalid OTP. Please try again.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (websiteSetup) {
      setImgThumb(websiteSetup.payload.image_content.login_image);
    }
  }, [websiteSetup]);

  return (
    <LoginLayout imgThumb={imgThumb}>
      <div className="flex flex-col items-left justify-center h-screen p-5">
        <h1 className="text-xl font-bold mb-4">Verify OTP</h1>
        <p className="mb-3 text-sm">
          OTP sent to <strong>{email}</strong>
        </p>
        <div className="input-area">
          <div className="input-item mb-5">
            <InputCom
              placeholder="Enter OTP"
              label=""
              type="text"
              inputClasses="h-[50px]"
              inputHandler={(e) => setOtp(e.target.value)}
              value={otp}
            />
          </div>
        </div>
        <button
          onClick={handleVerify}
          type="button"
          className="black-btn mb-6 max-w-60 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </LoginLayout>
  );
};

export default VerifyOtp;

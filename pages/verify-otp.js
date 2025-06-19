import VerifyOtp from "../src/components/Auth/Login/VerifyOTP";
import PageHead from "../src/components/Helpers/PageHead";

export default function verifyOTP() {
  return (
    <>
      <PageHead title="Verify" />
      <VerifyOtp />
    </>
  );
}

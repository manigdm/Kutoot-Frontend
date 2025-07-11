import SubscribeInputWidget from "./Helpers/SubscribeInputWidget";
export default function DiscountBanner({ className, datas }) {
  return (
    <div
      className={`w-full bg-cover flex justify-center items-end print:hidden ${
        className || ""
      }`}
      // style={{
      //   backgroundImage: `url(${
      //     process.env.NEXT_PUBLIC_BASE_URL + datas.image
      //   })`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "top",
      //   // backgroundImage: `linear-gradient(360deg, rgb(110 91 171) 0%, rgb(189 126 214) 100%)`
      // }}
    >
      <div className="mb-[70px] subscribtion-banner">
        <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-6 space-y-6 sm:space-y-0">
          {/* LEFT COLUMN: HEADER & TITLE */}
          <div
            className="flex flex-col items-start sm:items-start text-center sm:text-left"
          >
            <h3
              className="text-xl sm:text-3xl font-bold text-white"
              style={{ fontSize: "21px", color: "#F8D698" }}
            >
              Win the Car | Guaranteed Draw | 100% Yours
            </h3>
            <h2 className="text-sm sm:text-[21px] text-white font-normal">
              Range Rover Lucky Draw
            </h2>
          </div>
          {/* RIGHT COLUMN: SUBSCRIBE INPUT */}
          <div className="mt-4 sm:mt-0">
            <SubscribeInputWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

import SubscribeInputWidget from "./Helpers/SubscribeInputWidget";
export default function DiscountBanner({ className, datas }) {
  return (
    <div
      className={`w-full h-[307px] bg-cover flex justify-center items-end print:hidden ${
        className || ""
      }`}
      style={{
        // backgroundImage: `url(${
        //   process.env.NEXT_PUBLIC_BASE_URL + datas.image
        // })`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "top",
        backgroundImage: `linear-gradient(360deg, rgb(110 91 171) 0%, rgb(189 126 214) 100%)`
      }}
    >
      <div className="mb-[70px]">
        <div data-aos="fade-up">
          <h1 className="sm:text-3xl text-xl font-700 text-white mb-2 text-center">
            {datas.header}
          </h1>
          <p className="text-center sm:text-[18px] text-gray-300 text-sm font-400">
            {datas.title}
          </p>
        </div>
        <SubscribeInputWidget />
      </div>
    </div>
  );
}

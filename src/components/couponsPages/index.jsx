import React, { useState, useEffect, Fragment } from "react";
import { AiOutlineClockCircle, AiOutlineLeft } from "react-icons/ai";

const COUPON_IMAGE = "/4d0104c5-2c98-4c16-8266-834fe5ec4b68.png"; // Update if needed

// Dotted circle for coupon ID input
const DottedCircle = ({ value }) => (
  <span
    className={
      "w-7 h-7 mx-[2px] rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-base font-bold bg-white" +
      (value
        ? " border-[#A7192E] text-[#A7192E] bg-white"
        : " text-gray-300")
    }
  >
    {value || ""}
  </span>
);

const CouponOrderUI = () => {
  const [coupons, setCoupons] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [editingCouponIndex, setEditingCouponIndex] = useState(null);

  const [orderDetails] = useState({
    orderId: "01",
    campaign: "Mahindra Thar ROXX",
    quantity: 1,
    coins: 1000,
    couponsCount: 500,
    price: 2000,
  });


  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinPurchase = async () => {
      const payload = {
        camp_id: "07",
        amount: "100",
        quantity: "2",
        base_plan_id: "2",
      };

      let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
      if (!baseUrl.endsWith("/")) baseUrl += "/";
      const apiUrl = `${baseUrl}api/user/coinpurchase`;

      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: {
            // Add Authorization header here if needed
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`API error (${res.status}): ${errorText}`);
        }

        const data = await res.json();
        setResponse(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong.");
        setResponse(null);
      }
    };

    fetchCoinPurchase();
  }, []);


  // Generate initial coupons
  useEffect(() => {
    generateAutoCoupons(10);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const generateAutoCoupons = (count) => {
    const newCoupons = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 49) + 1
      );
      newCoupons.push({
        id: Date.now() + i,
        serialNo: i + 1,
        numbers: randomNumbers,
        series: "A",
        isManual: false,
      });
    }
    setCoupons(newCoupons);
  };

  const handleManualGenerate = (index) => {
    setEditingCouponIndex(index);
    setSelectedNumbers([]);
  };

  const handleSaveManualCoupon = () => {
    if (selectedNumbers.length === 6 && editingCouponIndex !== null) {
      const updatedCoupons = [...coupons];
      updatedCoupons[editingCouponIndex] = {
        ...updatedCoupons[editingCouponIndex],
        numbers: selectedNumbers,
        isManual: true,
      };
      setCoupons(updatedCoupons);

      setSelectedNumbers([]);
      setEditingCouponIndex(null);
    }
  };

  const handleNumberSelect = (num) => {
    if (selectedNumbers.length < 6 && !selectedNumbers.includes(num)) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF6] flex flex-col items-center pt-6 pb-24">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-6 text-xs bg-gray-100 font-semibold px-6 py-3 border-b rounded-t-xl">
          <div className="text-center">Order ID</div>
          <div className="text-center">Campaign</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Coins</div>
          <div className="text-center">Coupons</div>
          <div className="text-center">Price</div>
        </div>
        {/* Order Details */}
        <div className="grid grid-cols-6 px-6 py-2 text-center border-b text-sm font-medium">
          <div>{orderDetails.orderId}</div>
          <div>{orderDetails.campaign}</div>
          <div>{orderDetails.quantity}</div>
          <div>{orderDetails.coins.toLocaleString()}</div>
          <div>{orderDetails.couponsCount}</div>
          <div>₹{orderDetails.price.toLocaleString()}</div>
        </div>
        {/* Eligibility & Timer */}
        <div className="bg-[#FDF3EC] border-b px-6 py-2 flex items-center">
          <span className="text-[13px] text-[#9B6433]">
            You are eligible to generate 10 coupons manually. Remaining coupons
            are automatically generated.
          </span>
        </div>
        {/* Status Row */}
        <div style={{ background: "#FFFDF2" }}>
          <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
            <span className="text-green-600 font-semibold text-sm">
              0/{coupons.length} coupons generated
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 rounded px-3 py-1">
              <AiOutlineClockCircle className="w-4 h-4" />
              <span className="hidden sm:inline">
                Please choose your lucky numbers within
              </span>
              <span className="font-mono">{formatTime(timeLeft)}</span> mins
            </div>
            <button className="flex items-center text-gray-500 text-xs hover:underline">
              <AiOutlineLeft className="mr-1" />
              Go back
            </button>
          </div>
          {/* Coupon Table Header */}
          <div className="grid grid-cols-12 px-6 py-2 border-b text-xs font-semibold text-gray-600 uppercase">
            <div className="col-span-1 text-center">Serial no.</div>
            <div className="col-span-4 text-center">Coupon</div>
            <div className="col-span-1 text-center">Series</div>
            <div className="col-span-3 text-center">Coupon ID</div>
            <div className="col-span-3 text-center">Coupon Generation</div>
          </div>
          {/* Coupon List */}
          {coupons.map((coupon, idx) => (
            <div
              key={coupon.id}
              className="grid grid-cols-12 py-3 px-6 border-b text-sm relative bg-[#FCFBF5]"
            >
              {/* Serial No */}
              <div className="col-span-1 flex justify-center">
                <span style={{ background: editingCouponIndex === idx ?  '#4D4236' : '#9f9f9f' }} className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-semibold">
                  {String(coupon.serialNo).padStart(2, "0")}
                </span>
              </div>
              {/* Coupon ticket */}
              <div className="col-span-4 flex items-center gap-2">
               <div className="relative bg-white rounded-xl border border-gray-300 flex overflow-hidden w-[360px] h-[110px] shadow-sm mx-auto my-4">
                {/* Left side */}
                <div className="flex flex-col items-start justify-center w-[38%] pl-3 pr-3 py-3">
                  {/* Replace src with your logo */}
                  <img
                    src="/8006a21c-33c8-4990-9b05-2ab2b390475e.png"
                    alt="kutoot"
                    className="h-7 mb-1"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="mt-1 text-[15px] font-semibold leading-6 text-gray-800">
                    Luxury
                    <br />
                    Maldives Trip
                  </div>
                </div>

                {/* Center notches */}
                <div className="relative flex flex-col justify-between items-center h-full">
                  {/* Top notch */}
                  <div className="absolute -top-1  zIndex-1">
                    <div className="w-5 h-4 bg-[#FDFBF6] rounded-b-full border-b border-gray-300"></div>
                  </div>
                  {/* Dashed divider */}
                  <div className="h-full border-l border-dashed border-gray-300 mx-2"></div>
                  {/* Bottom notch */}
                  <div className="absolute -bottom-1 zIndex-1">
                    <div className="w-5 h-4 bg-[#FDFBF6] rounded-t-full border-t border-gray-300"></div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col justify-center flex-1 pl-5 pr-4">
                  <div className="text-xs text-gray-500">Campaign ID</div>
                  <div className="font-normal text-base text-gray-700 mb-2">
                    123
                  </div>
                  <div className="text-xs text-gray-500">Coupon ID</div>
                  <div className="font-normal text-sm text-gray-800 tracking-wider">
                        <span>A</span>
                        <span className="text-lg text-gray-700">-</span>
                     {coupon.numbers.map((num, i) => (
                    <Fragment key={i}>
                      <span>
                        {num}
                      </span>
                      {i < coupon.numbers.length - 1 && (
                        <span className="text-lg text-gray-700">-</span>
                      )}
                    </Fragment>
                  ))}
                  </div>
                </div>
              </div>
              </div>
              {/* Series */}
              <div className="col-span-1 text-center font-bold text-lg">{coupon.series}</div>
              {/* Coupon ID or editing UI */}
              {editingCouponIndex === idx ? (
                <div className="col-span-3 flex flex-col justify-center items-center">

                <div className="flex items-center gap-1 justify-center">
                  <span className="font-bold text-lg text-gray-700">A</span>
                  <span className="text-xl text-gray-700">-</span>
                  {[...Array(6)].map((_, i) => (
                    <Fragment key={i}>
                      <DottedCircle value={selectedNumbers[i] ? selectedNumbers[i].toString().padStart(2, "0") : ""} />
                      {i < 5 && <span className="text-xl text-gray-700">-</span>}
                    </Fragment>
                  ))}
                </div>
                <div className="mt-3 bg-white rounded-xl shadow border border-gray-200 px-4 py-3 mt-1 w-[280px]">
                      <div className="flex justify-end mb-1">
                        <button
                          className="text-gray-400 hover:text-gray-700"
                          onClick={() => setEditingCouponIndex(null)}
                        >
                          ×
                        </button>
                      </div>
                      <div className="grid grid-cols-10 gap-4 text-xs">
                        {Array.from({ length: 49 }, (_, i) => i + 1).map((num) => (
                          <button
                            key={num}
                            onClick={() => handleNumberSelect(num)}
                            disabled={
                              selectedNumbers.includes(num) || selectedNumbers.length >= 6
                            }
                            className={`w-6 h-6 rounded-full border font-medium 
                              ${
                                selectedNumbers.includes(num)
                                  ? "bg-[#A7192E] text-white border-[#A7192E]"
                                  : selectedNumbers.length >= 6
                                  ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200"
                                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                              }
                            `}
                          >
                            {num.toString().padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                    </div>
                </div>
              ) : (
                <div className="col-span-3 text-center font-mono">
              <div className="flex items-center gap-2">
                <div className="flex gap-1 ml-1 items-center">
                  <span className="font-bold text-xl text-gray-700">A</span>
                  <span className="text-2xl text-gray-700">-</span>
                  {coupon.numbers.map((num, i) => (
                    <Fragment key={i}>
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                        {num}
                      </span>
                      {i < coupon.numbers.length - 1 && (
                        <span className="text-2xl text-gray-700">-</span>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
              )}
              {/* Coupon Generation */}
              <div className="col-span-3 flex flex-col items-center">
                {editingCouponIndex === idx ? (
                  <div className="flex flex-col items-center w-full">
                    <button
                      className={`w-28 mb-2 py-1 rounded-full font-semibold ${
                        selectedNumbers.length === 6
                          ? "bg-[#A5A5A5] text-white"
                          : "bg-[#D9D9D9] text-white cursor-not-allowed"
                      }`}
                      disabled={selectedNumbers.length !== 6}
                      onClick={handleSaveManualCoupon}
                    >
                      Save
                    </button>
                    
                  </div>
                ) : (
                  <button
                    className="text-xs px-4 py-1 rounded-full border border-orange-400 text-orange-600 hover:bg-orange-50 transition font-medium"
                    onClick={() => handleManualGenerate(idx)}
                  >
                    Generate manually &rsaquo;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Checkout Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-orange-600 py-3 flex justify-center z-50">
        <button
          onClick={() => alert("Proceeding to checkout...")}
          className="w-full max-w-4xl text-center text-white text-lg font-semibold"
        >
          Proceed to Checkout &nbsp; &rarr;
        </button>
      </div>
    </div>
  );
};

export default CouponOrderUI;

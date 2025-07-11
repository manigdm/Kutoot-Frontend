import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
// import ThinPeople from "../../../Helpers/icons/ThinPeople";
import auth from "../../../../../utils/auth";
import { useEffect, useState } from "react";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Multivendor from "../../../Shared/Multivendor";
export default function TopBar({ className, contact,topBarProps }) {
  const {allCurrency,defaultCurrency,handler,toggleCurrency,toggleHandler}= topBarProps;
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);
  return (
    <>
      <div
        className={`w-full bg-white border-b qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <Link href="/" passHref>
                      <Image
                        width="120"
                        height="44"
                        objectFit="scale-down"
                        src={"/assets/images/logo-kutoot.png"}
                        alt="logo"
                      />
                  </Link>
                {defaultCurrency && allCurrency && (
                    <li>
                      <div className="currencyDropdown">
                        <div className="flex space-x-2 items-center">
                          {/* <span className="text-xs leading-6 text-qblack font-500">Currency:</span> */}
                          <div className="w-20 relative">
                            {/* <button onClick={()=>toggleHandler(!toggleCurrency)} type="button" className=" flex space-x-2 items-center text-xs bg-qblack text-white px-2 py-1 font-500">
                              <span className="">{defaultCurrency.currency_icon}</span>
                              <span>{defaultCurrency.currency_code}</span>
                              <span>Rs</span>
                            </button> */}
                            {toggleCurrency && (
                                <div
                                    className="w-24 h-[100px] overflow-y-scroll absolute bg-white left-0 top-[40px] z-50 p-2"
                                    style={{ boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
                                >
                                  <ul className="flex flex-col space-y-2">
                                    {allCurrency && allCurrency.length>0 && allCurrency.map((item,i)=>(
                                        <li onClick={()=>handler(item)} key={i}>
                                            <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                              {/* {item.currency_icon +" "+ item.currency_code} */}
                                              Rs
                                            </span>
                                        </li>
                                    ))}
                                  </ul>
                                </div>
                            )}

                          </div>
                        </div>
                      </div>

                    </li>
                )}

              </ul>
            </div>
            <div className="topbar-dropdowns lg:block hidden">
              
              <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                <div className="flex ltr:space-x-2 rtl:space-x-0 items-center rtl:ml-2 ltr:ml-0">
                  {/* <span className={`rtl:ml-2 ltr:ml-0`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-qblack font-500 leading-none rtl:ml-2 ltr:ml-0 ">
                    9999999999
                  </span> */}
                  {auth ? (
                    <Link href="/profile#dashboard" passHref>
                        <span className="text-xs leading-6 text-white font-500 cursor-pointer">
                          {ServeLangItem()?.Account}
                        </span>
                    </Link>
                  ) : (
                    <Link href="/login" passHref>
                        <span className="text-xs leading-6 text-white font-500 cursor-pointer">
                          {ServeLangItem()?.Account}
                        </span>
                    </Link>
                  )}
                </div>
                <div className="flex ltr:space-x-2 rtl:space-x-0 items-center ">
                  {/* <span className={`rtl:ml-2 ltr:ml-0`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-qblack font-500 leading-none">
                    Shop@kutoot.com
                  </span> */}
                  <Link href="/tracking-order" passHref>
                      <span className="text-xs leading-6 text-white font-500 cursor-pointer">
                        {ServeLangItem()?.Track_Order}
                      </span>
                  </Link>
                </div>
                <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
                {Multivendor() === 1 && (
                  <div className="become-seller-btn rounded orange-btn">
                    <Link href="/become-seller" passHref>
                        <div className=" w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                          <div className="flex rtl:space-x-reverse space-x-2 items-center">
                            <span className="text-sm font-600">
                              {ServeLangItem()?.Become_seller}
                            </span>
                            <span className="transform rtl:rotate-180 fill-current ">
                              <svg
                                width="6"
                                height="10"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <rect
                                  x="1.08984"
                                  width="6.94106"
                                  height="1.54246"
                                  transform="rotate(45 1.08984 0)"
                                />
                                <rect
                                  x="6"
                                  y="4.9082"
                                  width="6.94106"
                                  height="1.54246"
                                  transform="rotate(135 6 4.9082)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                    </Link>
                  </div>
                )}
              </div>
                {/*<div className="country-select flex space-x-1 items-center">*/}
                {/*  <div>*/}
                {/*    <Image*/}
                {/*      src={`/assets/images/country-logo-16x16.png`}*/}
                {/*      width="16"*/}
                {/*      height="16"*/}
                {/*      alt="country logo"*/}
                {/*      className="overflow-hidden rounded-full"*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <Selectbox*/}
                {/*    className="w-fit"*/}
                {/*    defaultValue="United State"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "United State" },*/}
                {/*      { id: 2, name: "Bangladesh" },*/}
                {/*      { id: 3, name: "India" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <div>*/}
                {/*    <Arrow className="fill-current qblack" />*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="currency-select flex space-x-1 items-center">*/}
                {/*  <Selectbox*/}
                {/*    defaultValue="USD"*/}
                {/*    className="w-fit"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "USD" },*/}
                {/*      { id: 2, name: "BDT" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <Arrow className="fill-current qblack" />*/}
                {/*</div>*/}
                {/*<div className="language-select flex space-x-1 items-center">*/}
                {/*  <Selectbox*/}
                {/*    defaultValue="Bangla"*/}
                {/*    className="w-fit"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "Bangla" },*/}
                {/*      { id: 2, name: "English" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <Arrow className="fill-current qblack" />*/}
                {/*</div>*/}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
export default function Footer({ settings }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [socialLink, setSocialLink] = useState(null);

  useEffect(() => {
    if (!footerContent) {
      setFooterContent(
        websiteSetup && websiteSetup.payload && websiteSetup.payload.footer
      );
    }
  });

  useEffect(() => {
    if (!socialLink) {
      setSocialLink(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.social_links
      );
    }
  });

  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });

  return (
    <footer className="footer-section-wrapper print:hidden">
      <div className="container-x block mx-auto pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          {/* logo area */}
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px]">
          <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <h1 className="text-[18] font-500 text-white mb-5">
              <Link href="/" passHref>
                  <Image
                    width="120"
                    height="44"
                    objectFit="scale-down"
                    src={"/assets/images/logo-kutoot.png"}
                    alt="logo"
                  />
              </Link>
              </h1>
              <div className="flex rtl:space-x-reverse space-x-5 items-center mb-3">
                <Link href="/" passHref>
                    <Image
                      width="120"
                      height="44"
                      objectFit="scale-down"
                      src={"/assets/images/apple-store.png"}
                      alt="logo"
                    />
                </Link>
                <Link href="/" passHref>
                    <Image
                      width="120"
                      height="44"
                      objectFit="scale-down"
                      src={"/assets/images/android-store.png"}
                      alt="logo"
                    />
                </Link>
              </div>
            {/* <p className="text-white text-[15px] w-[247px] leading-[28px]">
              {footerContent && footerContent.about_us}
            </p> */}
            {/*<p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">*/}
            {/*  {footerContent && footerContent.email ? footerContent.email : ""}*/}
            {/*</p>*/}
            {/*<p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">*/}
            {/*  {footerContent && footerContent.address*/}
            {/*    ? footerContent.address*/}
            {/*    : ""}*/}
            {/*</p>*/}
            {/*<div>*/}
            {/*  <ul className="flex flex-col space-y-4 ">*/}
            {/*    <li>*/}
            {/*      <Link href="/tracking-order">*/}
            {/*        <span className="text-[#9A9A9A] text-[15px] hover:text-white border-b border-transparent hover:border-qblack cursor-pointer capitalize">*/}
            {/*          Track Order*/}
            {/*        </span>*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link href="/faq">*/}
            {/*        <span className="text-[#9A9A9A] text-[15px] hover:text-white border-b border-transparent hover:border-qblack cursor-pointer capitalize">*/}
            {/*          Support*/}
            {/*        </span>*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    */}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              {firstCol && (
                <>
                  <div className="mb-5">
                    <h6 className="text-[18] font-500 text-white">
                      {firstCol.columnTitle}
                    </h6>
                  </div>
                  <div>
                    <ul className="flex flex-col space-y-4 ">
                      {firstCol.col_links.length > 0 &&
                        firstCol.col_links.map((item, i) => (
                          <li key={i}>
                            <Link href={item.link} passHref>
                                <span className="text-white text-[15px] hover:text-white border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                  {item.title}
                                </span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
              <div>
                {secondCol && (
                  <>
                    <div className="mb-5">
                      <h6 className="text-[18] font-500 text-white">
                        {secondCol.columnTitle}
                      </h6>
                    </div>
                    <div>
                      <ul className="flex flex-col space-y-4 ">
                        {secondCol.col_links.length > 0 &&
                          secondCol.col_links.map((item, i) => (
                            <li key={i}>
                              <Link href={item.link} passHref>
                                  <span className="text-white text-[15px] hover:text-white border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    {item.title}
                                  </span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                {thirdCol && (
                  <>
                    <div className="mb-5">
                      <h6 className="text-[18] font-500 text-white">
                        {thirdCol.columnTitle}
                      </h6>
                    </div>
                    <div>
                      <ul className="flex flex-col space-y-4 ">
                        {thirdCol.col_links.length > 0 &&
                          thirdCol.col_links.map((item, i) => (
                            <li key={i}>
                              <Link href={item.link} passHref>
                                  <span className="text-white text-[15px] hover:text-white border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    {item.title}
                                  </span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="flex rtl:space-x-reverse space-x-2 items-center mt-5">
                      { socialLink &&
                        socialLink.length > 0 &&
                        socialLink.map((item, i) => (
                          <a key={i} href={item.link} target="_blank" rel="noreferrer">
                            <Image
                              className="text-[#9A9A9A]"
                              src={item.icon }
                              alt={item.title}
                              width="40"
                              height="40"
                            />
                          </a>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottom-bar border-t border-qgray-border lg:h-[82px] flex lg:flex-row flex-col-reverse
         justify-between items-center"
        >
          <div className="w-full flex justify-center items-center mb-3">
            {/* <div className="flex rtl:space-x-reverse space-x-5 items-center">
              {socialLink &&
                socialLink.length > 0 &&
                socialLink.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer">
                    <FontAwesomeCom
                      className="w-4 h-4 text-[#9A9A9A]"
                      icon={item.icon}
                    />
                  </a>
                ))}
            </div> */}
            <span className="sm:text-base text-[10px] text-white text-center font-300">
              {footerContent && footerContent.copyright
                ? footerContent.copyright
                : ""}
            </span>
          </div>
          {footerContent && footerContent.payment_image ? (
            <div className="mt-2 lg:mt-0">
              <Link href="#" passHref>
                  <Image
                    width="318"
                    height="28"
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      footerContent.payment_image
                    }`}
                    alt="payment-getways"
                  />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </footer>
  );
}

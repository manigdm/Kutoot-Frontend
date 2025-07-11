import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Arrow from "../../../Helpers/icons/Arrow";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import Multivendor from "../../../Shared/Multivendor";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import LoginContext from "../../../Contexts/LoginContext";
import Cart from "../../../Cart";
export default function Navbar({ className }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  // const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  // const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  // const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const getLoginContexts = useContext(LoginContext);
  const handler = () => {
    setToggle(!categoryToggle);
  };

  useEffect(() => {
      if (getLoginContexts.loginPopup === false) {
        setAuth(() => JSON.parse(localStorage.getItem("auth")));
      }
    }, [getLoginContexts.loginPopup]);
    const profilehandler = () => {
      setProfile(!profile);
    };
    const logout = () => {
      if (auth) {
        apiRequest.logout(auth.access_token);
        localStorage.removeItem("auth");
        dispatch(fetchWishlist());
        router.push("/login");
      }
    };

  useEffect(() => {
    let categorySelector = document.querySelector(".category-dropdown");
    setHeight(categorySelector.offsetHeight);
  }, [categoryToggle]);

  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);
  return (
    <div
      className={`nav-widget-wrapper w-full relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="relative custom-logo">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex rtl:space-x-reverse space-x-3 items-center">
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1"  />
                        <rect y="8" width="14" height="1"  />
                        <rect y="4" width="10" height="1"  />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      {ServeLangItem()?.All_Categories}
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <>
                    <div
                      className="fixed top-0 left-0 w-full h-full -z-10"
                      onClick={handler}
                    ></div>
                  </>
                )}
                <div
                  style={{
                    boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                  }}
                  className={`category-dropdown w-full absolute left-0 top-[53px]  ${
                    categoryToggle ? "block" : "hidden"
                  }`}
                >
                  <ul className="categories-list relative">
                    {categoryList &&
                      categoryList.map((item) => (
                        <li key={item.id} className="category-item">
                          <Link
                            href={{
                              pathname: "/products",
                              query: { category: item.slug },
                            }}
                            passHref
                          >
                              <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                <div className="flex items-center rtl:space-x-reverse space-x-6">
                                  <span>
                                    <FontAwesomeCom
                                      className="w-4 h-4"
                                      icon={item.icon}
                                    />
                                  </span>
                                  <span className="text-xs font-400">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <span>
                                    <svg
                                      className={`transform rtl:rotate-180 fill-current`}
                                      width="6"
                                      height="9"
                                      viewBox="0 0 6 9"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="1.49805"
                                        y="0.818359"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(45 1.49805 0.818359)"

                                      />
                                      <rect
                                        x="5.58984"
                                        y="4.90918"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(135 5.58984 4.90918)"

                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                          </Link>
                          <div
                            className={`sub-category-lvl-two absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                              item.active_sub_categories.length > 0
                                ? "bg-white"
                                : ""
                            }`}
                            style={{ height: `${subCatHeight}px` }}
                          >
                            <ul className="">
                              {item.active_sub_categories.length > 0 &&
                                item.active_sub_categories.map((subItem) => (
                                  <li
                                    key={subItem.id}
                                    className="category-item"
                                  >
                                    <Link
                                      href={{
                                        pathname: "/products",
                                        query: { sub_category: subItem.slug },
                                      }}
                                      passHref
                                    >
                                        <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                          <div>
                                            <span className="text-xs font-400">
                                              {subItem.name}
                                            </span>
                                          </div>
                                          <div>
                                            <span>
                                              <svg
                                                className={`transform rtl:rotate-180 fill-current`}
                                                width="6"
                                                height="9"
                                                viewBox="0 0 6 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="1.49805"
                                                  y="0.818359"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(45 1.49805 0.818359)"

                                                />
                                                <rect
                                                  x="5.58984"
                                                  y="4.90918"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(135 5.58984 4.90918)"

                                                />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                    </Link>
                                    <div
                                      className={`sub-category-lvl-three absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                                        subItem.active_child_categories.length >
                                        0
                                          ? "bg-white"
                                          : ""
                                      }`}
                                      style={{ height: `${subCatHeight}px` }}
                                    >
                                      <ul className="">
                                        {subItem.active_child_categories
                                          .length > 0 &&
                                          subItem.active_child_categories.map(
                                            (subsubitem) => (
                                              <li
                                                key={subsubitem.id}
                                                className="category-item"
                                              >
                                                <Link
                                                  href={{
                                                    pathname: "/products",
                                                    query: {
                                                      child_category:
                                                        subsubitem.slug,
                                                    },
                                                  }}
                                                  passHref
                                                >
                                                    <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                                      <div>
                                                        <span className="text-xs font-400">
                                                          {subsubitem.name}
                                                        </span>
                                                      </div>
                                                    </div>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse items-center relative">
              <div className="w-[400px] h-[44px]">
                <SearchBox className="search-com" />
              </div>
              {/* <div className="compaire relative">
                {auth ? (
                  <Link href="/products-compaire" passHref>
                      <span className="cursor-pointer">
                        <Compair className="fill-current" />
                      </span>
                  </Link>
                ) : (
                  <Link href="/login" passHref>
                      <span className="cursor-pointer">
                        <Compair className="fill-current" />
                      </span>
                  </Link>
                )}

                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {compareProducts ? compareProducts.products.length : 0}
                </span>
              </div> */}
              <div className="favorite relative">
                <Link href="/wishlist" passHref>
                    <span className="cursor-pointer">
                      <ThinLove className="fill-current txt-white" />
                    </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] txt-white">
                  {wishlists?.total || 0}
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref>
                      <span className="cursor-pointer">
                        {/* <ThinBag className="fill-current txt-white" /> */}
                        <ThinBag className="fill-current txt-white"/>
                      </span>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] txt-white">
                    {cartItems ? cartItems.length : 0}
                  </span>
                </div>

                <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">
                    <span className="text-qblack font-bold text-sm txt-white">
                      {auth && auth?.user?.name}
                    </span>
                    <span className="text-qgray font-medium text-sm txt-white">
                      {auth && auth?.user?.phone}
                    </span>
                  </button>
                ) : (
                  <Link href="/login" passHref>
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                  </Link>
                )}
              </div>

              {profile && (
                <>
                  <div
                    onClick={() => setProfile(false)}
                    className="w-full h-full fixed top-0 left-0 z-30"
                    style={{ zIndex: "35", margin: "0" }}
                  ></div>
                  <div
                    className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                  >
                    <div className="menu-item-area w-full  p-5">
                      <ul className="w-full  flex flex-col space-y-7">
                        <li className="text-base text-qgraytwo">
                          <span>
                            {ServeLangItem()?.Hi}, {auth && auth?.user?.name}{" "}
                          </span>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/profile#dashboard" passHref>
                              <span className="capitalize">
                                {ServeLangItem()?.profile}
                              </span>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/contact" passHref>
                              <span className="capitalize">
                                {ServeLangItem()?.Support}
                              </span>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/faq" passHref>
                              <span className="capitalize">
                                {ServeLangItem()?.FAQ}
                              </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                      <button
                        onClick={logout}
                        type="button"
                        className="text-qblack text-base font-semibold"
                      >
                        {ServeLangItem()?.Sign_Out}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <div className="flex space-x-6 rtl:space-x-reverse items-center relative">
              <ul className="nav-wrapper flex xl:space-x-10 rtl:space-x-reverse space-x-5">
                  <li>
                    <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                      <span>{ServeLangItem()?.Shop}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          {mageMenuList &&
                            mageMenuList.slice(0, 3).map((megaItem) => (
                              <div key={megaItem.id}>
                                <div className="category">
                                  <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                    {megaItem.category.name}
                                  </h1>
                                </div>
                                <div className="category-items">
                                  <ul className="flex flex-col space-y-2">
                                    {megaItem.sub_categories.length > 0 &&
                                      megaItem.sub_categories.map((subItem) => (
                                        <li key={subItem.id}>
                                          <Link
                                            href={{
                                              pathname: "/products",
                                              query: {
                                                sub_category:
                                                  subItem.sub_category &&
                                                  subItem.sub_category.slug,
                                              },
                                            }}
                                            passHref
                                          >
                                              <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                                {subItem.sub_category &&
                                                  subItem.sub_category.name}
                                              </span>
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                        </div>
                        {megaMenuBanner && parseInt(megaMenuBanner.status)===1 && (
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.NEXT_PUBLIC_BASE_URL +
                                megaMenuBanner.image
                              })`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                            }}
                            className="thumbnil w-[348px] h-[235px] relative flex items-center ltr:pl-[40px] rtl:pr-[40px] group"
                          >
                            <div className="flex flex-col justify-between">
                              <div>
                                <div className=" mb-[10px]">
                                  <span className="text-qblack uppercase text-xs font-semibold">
                                    {megaMenuBanner.title_one}
                                  </span>
                                </div>
                                <div className="mb-[30px]">
                                  <h1 className="w-[160px] text-[24px] leading-[32px] text-qblack font-semibold">
                                    {megaMenuBanner.title_two}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-[90px]">
                                <Link
                                  href={{
                                    pathname: "/products",
                                    query: {
                                      category: megaMenuBanner.product_slug,
                                    },
                                  }}
                                  passHref
                                >
                                    <div className="cursor-pointer w-full relative  ">
                                      <div className="inline-flex  rtl:space-x-reverse space-x-1.5 items-center relative z-20">
                                        <span className="text-sm text-black font-medium leading-[30px]">
                                          {ServeLangItem()?.Shop_Now}
                                        </span>
                                        <span className="leading-[30px]">
                                          <svg
                                            className={`transform rtl:rotate-180 fill-current`}
                                            width="7"
                                            height="11"
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              x="2.08984"
                                              y="0.636719"
                                              width="6.94219"
                                              height="1.54271"
                                              transform="rotate(45 2.08984 0.636719)"

                                            />
                                            <rect
                                              x="7"
                                              y="5.54492"
                                              width="6.94219"
                                              height="1.54271"
                                              transform="rotate(135 7 5.54492)"

                                            />
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"></div>
                                    </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link href="/sellers" passHref>
                        <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                          <span>{ServeLangItem()?.Sellers}</span>
                        </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" passHref>
                        <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                          <span className="capitalize">
                            {ServeLangItem()?.blogs}
                          </span>
                        </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                        <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                          <span>{ServeLangItem()?.About}</span>
                        </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref>
                        <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                          <span>{ServeLangItem()?.Contact}</span>
                        </span>
                    </Link>
                  </li>
                  <li className="relative">
                    <span className="flex items-center text-sm font-600 cursor-pointer text-white ">
                      <span>{ServeLangItem()?.Pages}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link href="/privacy-policy" passHref>
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Privacy_Policy}
                                      </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/terms-condition" passHref>
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Term_and_Conditions}
                                      </span>
                                  </Link>
                                </li>
                                {Multivendor() === 1 && (
                                  <li>
                                    <Link
                                      href="seller-terms-condition"
                                      passHref
                                    >
                                        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                          {
                                            ServeLangItem()
                                              ?.Seller_terms_and_conditions
                                          }
                                        </span>
                                    </Link>
                                  </li>
                                )}
                                <li>
                                  <Link href="/faq" passHref>
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.FAQ}
                                      </span>
                                  </Link>
                                </li>
                                {customPages &&
                                  customPages.length > 0 &&
                                  customPages.map((item, i) => (
                                    <React.Fragment key={i}>
                                      <li>
                                        <Link
                                          href={`/pages?custom=${item.slug}`}
                                          passHref
                                        >
                                            <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                              {item.page_name}
                                            </span>
                                        </Link>
                                      </li>
                                    </React.Fragment>
                                  ))}
                                <li>
                                <Link href="#">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                    Shop Category Icon
                                  </span>
                                </Link>
                                </li>
                                <li>
                                <Link href="#">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                    Shop List View
                                  </span>
                                </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
            </div> */}
            {/* {Multivendor() === 1 && (
              <div className="become-seller-btn rounded-lg">
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
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

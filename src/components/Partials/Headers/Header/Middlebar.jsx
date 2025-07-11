import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import { fetchWishlist } from "../../../../store/wishlistData";
import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import LoginContext from "../../../Contexts/LoginContext";
import Arrow from "../../../Helpers/icons/Arrow";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const getLoginContexts = useContext(LoginContext);
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  // const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  // const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  // const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
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
  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);
  return (
    <div className={`w-full h-[86px] ${className}`}>
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
              <div className="w-[250px] h-[44px]">
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
                      <ThinLove className="fill-current" />
                    </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {wishlists?.total || 0}
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref>
                      <span className="cursor-pointer">
                        <ThinBag className="fill-current" />
                      </span>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    {cartItems ? cartItems.length : 0}
                  </span>
                </div>

                <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">
                    <span className="text-qblack font-bold text-sm block">
                      {auth && auth?.user?.name}
                    </span>
                    <span className="text-qgray font-medium text-sm block">
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
          </div>
        </div>
      </div>
    </div>
  );
}

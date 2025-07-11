import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import auth from "../../../../utils/auth";
import settings from "../../../../utils/settings";
import { fetchCart } from "../../../store/Cart";
import { fetchCompareProducts } from "../../../store/compareProduct";
import { fetchWishlist } from "../../../store/wishlistData";
import CheckProductIsExistsInFlashSale from "../../Shared/CheckProductIsExistsInFlashSale";
import ProductView from "../../SingleProductPage/ProductView";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import ThinLove from "../icons/ThinLove";
import ServeLangItem from "../ServeLangItem";
import CurrencyConvert from "../../Shared/CurrencyConvert";
const Redirect = () => {
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-sm text-gray-500">{ServeLangItem()?.Item_added}</span>
      <Link href="/cart">
        <span className="text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer">
          {ServeLangItem()?.Go_To_Cart}
        </span>
      </Link>
    </div>
  );
};

export default function ProductCardStyleOneTwo({ datas }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlist = wishlistData && wishlistData.wishlists;
  const wishlisted =
    wishlist && wishlist.data.find((id) => id.product.id === datas.id);

  const [arWishlist, setArWishlist] = useState(null);
  useEffect(() => {
    if (wishlisted) {
      setArWishlist(true);
    } else {
      setArWishlist(false);
    }
  }, [wishlisted]);
  const available =
    (datas.cam_product_sale /
      (datas.cam_product_available + datas.cam_product_sale)) *
    100;

  const addToWishlist = (id) => {
    if (auth()) {
      setArWishlist(true);
      apiRequest.addToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      router.push("/login");
    }
  };
  const removeToWishlist = (id) => {
    if (auth()) {
      setArWishlist(false);
      apiRequest.removeToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      router.push("/login");
    }
  };
  // cart
  const varients = datas && datas.variants.length > 0 && datas.variants;
  const [getFirstVarients, setFirstVarients] = useState(
    varients && varients.map((v) => v.active_variant_items[0])
  );
  const [price, setPrice] = useState(null);
  const [offerPrice, setOffer] = useState(null);
  const addToCart = (id) => {
    if (auth()) {
      const data = {
        id: id,
        token: auth() && auth().access_token,
        quantity: 1,
        variants:
          getFirstVarients &&
          getFirstVarients.length > 0 &&
          getFirstVarients.map((v) =>
            v ? parseInt(v.product_variant_id) : null
          ),
        variantItems:
          getFirstVarients &&
          getFirstVarients.length > 0 &&
          getFirstVarients.map((v) => (v ? v.id : null)),
      };
      if (varients) {
        const variantQuery = data.variants.map((value, index) => {
          return value ? `variants[]=${value}` : `variants[]=-1`;
        });
        const variantString = variantQuery.map((value) => value + "&").join("");

        const itemsQuery = data.variantItems.map((value, index) => {
          return value ? `items[]=${value}` : `items[]=-1`;
        });
        const itemQueryStr = itemsQuery.map((value) => value + "&").join("");
        const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) => {
            toast.success(<Redirect />, {
              autoClose: 5000,
            });
            toast.error(
              res.response &&
                res.response.data.message &&
                res.response.data.message
            );
          })
          .catch((err) => {
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      } else {
        const uri = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) =>
            toast.success(<Redirect />, {
              autoClose: 5000,
            })
          )
          .catch((err) => {
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      }
    } else {
      router.push("/login");
    }
  };
  useEffect(() => {
    if (varients) {
      const prices = varients.map((v) =>
        v.active_variant_items.length > 0 && v.active_variant_items[0].price
          ? v.active_variant_items[0].price
          : 0
      );

      if (datas.offer_price) {
        const sumOfferPrice = parseInt(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseInt(datas.offer_price)
        );
        setPrice(datas.price);
        setOffer(sumOfferPrice);
      } else {
        const sumPrice = parseInt(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseInt(datas.price)
        );
        setPrice(sumPrice);
      }
    } else {
      setPrice(datas && datas.price);
      setOffer(datas && datas.offer_price);
    }
  }, [datas, varients]);
  const { currency_icon } = settings();

  //quickViewFeature
  const [quickViewModal, setQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState(null);
  const quickViewHandler = (slug) => {
    setQuickView(!quickViewModal);
    if (!quickViewData) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/product/${slug}`)
        .then((res) => {
          setQuickViewData(res.data ? res.data : null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    if (quickViewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickViewModal]);
  const productCompare = (id) => {
    if (auth()) {
      apiRequest
        .addProductForCompare(id, auth().access_token)
        .then((res) => {
          toast.success(res.data && res.data.notification);
          dispatch(fetchCompareProducts());
        })
        .catch((err) => {
          toast.error(err.response && err.response.data.notification);
          console.log(err);
        });
    } else {
      router.push("/login");
    }
  };
  return (
    <div
      className="product-card-style-one-two w-full h-full bg-white relative group overflow-hidden"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        className="product-card-img w-full h-[322px] mt-4"
        style={{
          background: `url(${datas.image}) no-repeat center`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="product-card-details flex justify-center h-[102px] items-center  relative">
        {/* add to card button */}
        <div className="absolute w-[204px] h-[54px] left-[80px] -bottom-20 group-hover:bottom-[100px] transition-all duration-300 ease-in-out">
          <button
            onClick={() => addToCart(datas.id)}
            type="button"
            className="yellow-btn"
          >
            <div>
              <span>{ServeLangItem()?.Add_To_Cart}</span>
            </div>
          </button>
        </div>
        <div>
          <Link
            href={{ pathname: "/single-product", query: { slug: datas.slug } }}
            passHref
          >
              <p className="title mb-2.5 text-[20px] font-600 text-center text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer">
                {datas.title}
              </p>
          </Link>
          <div className="flex justify-center ">
            <div className="price">
              {offerPrice && (
                <span
                  suppressHydrationWarning
                  className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block"
                >
                  <CheckProductIsExistsInFlashSale
                    price={offerPrice}
                    id={datas.id}
                  />
                </span>
              )}
              <span
                suppressHydrationWarning
                className={`main-price font-600 text-center text-[18px] ${
                  offerPrice ? "line-through text-qgray" : "text-qred"
                }`}
              >
                {offerPrice ? (
                  <span><CurrencyConvert price={price}/></span>
                ) : (
                  <CheckProductIsExistsInFlashSale
                    id={datas.id}
                    price={price}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-[50px] -right-[50px] top-20  transition-all duration-300 ease-in-out">
        <button
          onClick={() => quickViewHandler(datas.slug)}
          type="button"
          className="cursor-pointer"
        >
          <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
            <QuickViewIco />
          </span>
        </button>
        {!arWishlist ? (
          <button type="button" onClick={() => addToWishlist(datas.id)}>
            <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
              <ThinLove />
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => removeToWishlist(wishlisted && wishlisted.id)}
          >
            <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
              <ThinLove fill={true} />
            </span>
          </button>
        )}

        {/* <button type="button" onClick={() => productCompare(datas.id)}>
          <span className="w-10 h-10 flex justify-center items-center bg-[#CCECEB] rounded">
            <Compair />
          </span>
        </button> */}
      </div>
      {quickViewModal && quickViewData && (
        <div className="quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ">
          <div
            onClick={() => setQuickView(!quickViewModal)}
            className="w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"
          ></div>
          <div
            data-aos="fade-up"
            className="md:mx-10 w-full bg-white relative py-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:h-auto xl:mt-0"
            style={{ zIndex: "999" }}
          >
            <ProductView
              images={
                quickViewData.gellery.length > 0 ? quickViewData.gellery : []
              }
              product={quickViewData.product}
            />
            <button
              onClick={() => setQuickView(!quickViewModal)}
              type="button"
              className="absolute right-3 top-3"
            >
              <span className="text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

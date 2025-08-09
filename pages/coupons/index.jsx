import React from "react";
import CouponPages from "../../src/components/couponsPages";
import PageHead from "../../src/components/Helpers/PageHead";

export default function AllCouponsPageData({ data }) {
  const seoSetting = data?.seoSetting || {};
  // Or, if your API returns `seoSetting` inside data.data: const seoSetting = data?.data?.seoSetting || {};
console.log({ data });

  return (
    <>
      <PageHead
        title={seoSetting.seo_title || "Coupons"}
        metaDes={seoSetting.seo_description || ""}
      />
      <CouponPages data={data} />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
      const payload = {
    camp_id: "2",
    amount: "100",
    quantity: "2",
    base_plan_id: "2",
  };
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/user/coinpurchase`,{
         method: "POST",
       headers: {
         // Add Authorization header here if needed
         "Content-Type": "application/json",
       },
       body: JSON.stringify(payload),
     }
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: false,
      },
    };
  }
};
// export async function getServerSideProps() {
//   const payload = {
//     camp_id: "2",
//     amount: "100",
//     quantity: "2",
//     base_plan_id: "2",
//   };

//   // Validate env var
//   let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
//   if (!baseUrl) {
//     return { props: { data: { error: "Base URL env variable not set" } } };
//   }
//   if (!baseUrl.endsWith("/")) baseUrl += "/";

//   const apiUrl = `${baseUrl}api/user/coinpurchase`;

//   try {
//     const res = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         // Add Authorization header here if needed
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       return {
//         props: { data: { error: `API error: ${res.status}`, errorText } },
//       };
//     }

//     let data = null;
//     try {
//       data = await res.json();
//     } catch (jsonErr) {
//       // JSON parsing failed
//       return {
//         props: { data: { error: "Invalid JSON response" } },
//       };
//     }

//     return { props: { data } };
//   } catch (err) {
//     return {
//       props: { data: { error: "Fetch failed", details: err.message } },
//     };
//   }
// }

import PageTitle from "../../src/components/Helpers/PageTitle";
import Layout from "../../src/components/Partials/Layout";
import ServeLangItem from "../../src/components/Helpers/ServeLangItem";

export default function TermsCondition({ }) {

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="terms-condition-page w-full   min-h-screen">
        <div className="w-full mb-[30px]">
          <PageTitle
            breadcrumb={[
              { name: ServeLangItem()?.home, path: "/" },
              {
                name: ServeLangItem()?.Term_and_Conditions,
                path: "/terms-conditions",
              },
            ]}
            title="Terms and Condition"
          />
        </div>
        <div className="w-full">
          <div
            className="container-x mx-auto"
        
          >
            <div className="max-w-4xl mx-auto p-6 text-black">
  

      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          1. Kutoot Coins – Promotional Credit System
        </h2>
        <ul className="mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            <strong>1.1 Definition:</strong> Kutoot Coins are digital promotional credits purchased by users to access exclusive offers, redeem products and services from partnered merchants, and gain automatic entries into lucky draw campaigns. Coins are not legal tender or financial instruments and are intended solely for promotional use within the Kutoot ecosystem.
          </li>
          <li>
            <strong>1.2 Usage:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Coins may be redeemed for eligible goods and services offered by verified Kutoot vendors, driving sales through promotional incentives.</li>
              <li>Coin bundles may include additional benefits such as free lucky draw entries, merchant-specific discounts, or early product access to boost vendor engagement.</li>
            </ul>
          </li>
          <li>
            <strong>1.3 Redemption & Expiry:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Coins are non-transferable, non-redeemable for cash, and non-refundable (subject to Section 1.4).</li>
              <li>Coins are valid for 100 days from the date of issuance (or as specified at purchase), after which they expire and lose all value.</li>
            </ul>
          </li>
          <li>
            <strong>1.4 Refunds:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Refunds are permissible only in cases of: (a) Duplicate transactions. (b) Failed payments not reflected in the user’s account.</li>
              <li>Refund requests must be submitted to <b>support@kutoot.com</b> within 7 calendar days, accompanied by transaction evidence (e.g., receipt or transaction ID).</li>
              <li>Upon validation, refunds may be processed as coin re-credits or monetary reimbursement, at Kutoot’s discretion, in accordance with the Consumer Protection Act, 2019, Section 2(9). Escalations may be directed to <b>legal@kutoot.com</b> for review.</li>
            </ul>
          </li>
          <li>
            <strong>1.5 Promotional Purpose:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Kutoot Coins are provided exclusively for promotional engagement to enhance user shopping experiences and support e-commerce sales growth for vendors. They do not constitute an investment, gambling mechanism, or income-generating scheme.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          2. Reward Campaigns & Lucky Draw Participation
        </h2>
        <ul className="mt-2" style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            <strong>2.1 Automatic Entry with Coin Purchase:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Each qualifying coin purchase includes free entries into active lucky draw or promotional campaigns, offering rewards such as luxury villas, vehicles, gadgets, and vacations to incentivize shopping from Kutoot vendors.</li>
            </ul>
          </li>
          <li>
            <strong>2.2 Campaign Triggers:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Campaigns are activated upon achieving predefined goals, including total coin sales, vendor sales milestones, or user activity thresholds.</li>
              <li>Draw dates and eligibility criteria will be published on the Platform at least 7 calendar days in advance, subject to independent audit by a certified third-party agency adhering to ISO 27001 standards.</li>
            </ul>
          </li>
          <li>
            <strong>2.3 Winner Selection:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Winners are determined through a randomized selection process, validated by an independent audit firm. Select draws may be livestreamed, with winning ticket IDs and audit reports made available on the Platform for transparency.</li>
            </ul>
          </li>
          <li>
            <strong>2.4 Claiming Rewards:</strong>
            <ul style={{ fontSize: "16px", listStyleType: "circle", paddingLeft: "20px", marginTop: "6px" }}>
              <li>Winners will be notified via their registered email or phone number within 7 working days of the draw.</li>
              <li>Prizes must be claimed within 30 calendar days of notification, failing which they may be forfeited and reallocated to future campaigns.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          3. E-Commerce Engagement & Vendor Integration
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          Kutoot operates as an e-commerce promotional marketplace. Vendors collaborate with Kutoot to boost their sales by offering products and services redeemable via Kutoot Coins. This drives direct commercial engagement, with Kutoot acting solely as a promotional intermediary, not a reseller.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          4. User Account & Responsibilities
        </h2>
        <ul style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Users must provide accurate registration details (name, email, phone number, government ID where required).</li>
          <li>Users are solely responsible for maintaining account confidentiality and preventing unauthorized access.</li>
          <li>Misuse of the Platform, fraudulent activity, or breach of these Terms may result in account suspension or termination.</li>
        </ul>
      </div>

      {/* Section 5 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          5. Platform Rights & Modifications
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          Kutoot reserves the right to modify, suspend, or terminate campaigns, coin structures, or Platform services without prior notice, provided such changes comply with applicable Indian laws. Updated Terms will be effective upon posting to the Platform.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          6. Prohibited Activities
        </h2>
        <ul style={{ fontSize: "18px", listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Using the Platform for money laundering, gambling, or illegal trade.</li>
          <li>Attempting to hack, manipulate, or interfere with draw outcomes.</li>
          <li>Impersonating Kutoot staff, vendors, or other users.</li>
        </ul>
      </div>

      {/* Section 7 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          7. Intellectual Property
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          All content, trademarks, software, logos, and designs on the Platform are the exclusive intellectual property of Kutoot or its licensors. Users may not copy, distribute, or exploit Platform content without express written consent.
        </p>
      </div>

      {/* Section 8 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          8. Limitation of Liability
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          To the maximum extent permitted by law, Kutoot disclaims all liability for indirect, incidental, or consequential damages arising from Platform use. Kutoot’s aggregate liability for any claim shall not exceed the total value of coins purchased by the user in the preceding 3 months.
        </p>
      </div>

      {/* Section 9 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          9. Dispute Resolution
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          Any disputes shall be resolved amicably via Kutoot’s grievance redressal team (<b>grievance@kutoot.com</b>). Unresolved disputes shall be referred to arbitration in Bangalore, India, under the Arbitration and Conciliation Act, 1996. Proceedings will be conducted in English, with one arbitrator mutually appointed by the parties.
        </p>
      </div>

      {/* Section 10 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          10. Compliance with Law
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          Kutoot complies with all applicable Indian laws, including the Information Technology Act, 2000, Consumer Protection Act, 2019, and relevant state regulations governing promotional schemes. Users are responsible for ensuring their participation complies with local jurisdictional laws.
        </p>
      </div>

      {/* Section 11 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          11. Governing Law & Jurisdiction
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          These Terms are governed by and construed in accordance with the laws of India. Exclusive jurisdiction shall lie with the competent courts of Bangalore, Karnataka.
        </p>
      </div>

      {/* Section 12 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          12. Contact Information
        </h2>
        <p style={{ fontSize: "18px", marginTop: "6px" }}>
          For queries, complaints, or clarifications regarding these Terms, please contact: <br />
          <b>Email:</b> support@kutoot.com <br />
          <b>Legal:</b> legal@kutoot.com <br />
          <b>Grievance Officer:</b> grievance@kutoot.com
        </p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

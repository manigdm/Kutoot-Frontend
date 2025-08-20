import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ServeLangItem from "../Helpers/ServeLangItem";

export default function PrivacyPolicy({ datas }) {
  const { privacyPolicy } = datas;
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="terms-condition-page w-full  pb-[30px] min-h-screen">
        <div className="w-full mb-[30px]">
          <PageTitle
            breadcrumb={[
              { name: ServeLangItem()?.home, path: "/" },
              { name: ServeLangItem()?.Privacy_Policy, path: "privacy-policy" },
            ]}
            title="Privacy Policy"
          />
        </div>
        <div className="w-full">
          <div className="container-x mx-auto">
            {/* {privacyPolicy && (
              <div
                dangerouslySetInnerHTML={{
                  __html: privacyPolicy.privacy_policy,
                }}
              ></div>
            )} */}
      <div className="max-w-4xl mx-auto px-6 text-black leading-relaxed">

      {/* Introduction */}
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          Kutoot Innovations Pvt. Ltd. ("Kutoot", "we", "our", or "us") is committed to protecting your personal data and privacy.
          This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our platform—covering our website
          (<a href="https://www.kutoot.com" className="text-orange-500 hover:underline">www.kutoot.com</a>), mobile app, promotional campaigns,
          and e-commerce rewards program (collectively, the "Platform").
        </p>
        <p className="mt-4">
          This Policy complies with the Digital Personal Data Protection Act, 2023 (DPDP Act), Information Technology Act, 2000, IT Rules, 2011,
          and other applicable Indian laws. For users outside India, we also follow global frameworks such as the General Data Protection Regulation (GDPR).
          By using our services, you agree to this Privacy Policy.
        </p>
      </div>

      {/* Definitions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Definitions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Data:</strong> Any information that identifies you directly or indirectly.</li>
          <li><strong>Sensitive Personal Data:</strong> Financial information, government IDs (e.g., Aadhaar, PAN), biometric or health data.</li>
          <li><strong>Processing:</strong> Collection, usage, storage, disclosure, or deletion of data.</li>
          <li><strong>Cookies:</strong> Small text files used to recognize your device or browser activity.</li>
        </ul>
      </div>

      {/* Data We Collect */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold ">Data We Collect</h2>

        <h4 className="font-semibold text-lg mt-4 mb-2">Personal Data</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Name, email ID, mobile number</li>
          <li>Date of birth, gender</li>
          <li>Communication address</li>
          <li>User-generated content (e.g., campaign clicks, survey answers)</li>
          <li>KYC information (PAN, Aadhaar, selfie) for prize claims</li>
        </ul>

        <h4 className="font-semibold text-lg mt-4 mb-2">Financial and Transactional Data</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Purchase history of coins</li>
          <li>Redeemed rewards and vendor interactions</li>
          <li>Payment gateway data (processed securely via Razorpay or equivalent PCI-DSS platforms)</li>
          <li>Prize winnings and tax documentation (e.g., Form 194B for TDS)</li>
        </ul>

        <h4 className="font-semibold text-lg mt-4 mb-2">Technical & Usage Data</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Device identifiers (IP address, OS version, device ID)</li>
          <li>Clickstream data (e.g., campaign views, lucky draw entries)</li>
          <li>Browsing behavior, app interaction logs</li>
          <li>Location (approximate, with permission)</li>
        </ul>

        <h4 className="font-semibold text-lg mt-4 mb-2">Cookies & Tracking</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Authentication and login tracking</li>
          <li>Personalization and retargeting (with user consent)</li>
          <li>Analytics via Google Analytics, Mixpanel, or equivalent tools</li>
        </ul>
      </div>

      {/* Purpose of Collection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Purpose of Collection</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Verify your identity (KYC, OTP)</li>
          <li>Manage coins, bundles, expiry (typically 100 days, subject to change)</li>
          <li>Process payments and deliver rewards</li>
          <li>Operate lucky draws, notify winners, and issue prizes</li>
          <li>Comply with tax, audit, and legal obligations</li>
          <li>Improve Platform usability and detect fraud</li>
          <li>Send offers, updates, and promotional communications (with opt-in consent)</li>
          <li>Offer customer support via chat, email, or call</li>
        </ul>
      </div>

      {/* Legal Basis */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Legal Basis for Processing</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Consent (e.g., for marketing, cookies)</li>
          <li>Contractual necessity (providing services)</li>
          <li>Legal obligation (tax, audit, KYC laws)</li>
          <li>Legitimate interest (fraud prevention, analytics)</li>
        </ul>
      </div>

      {/* Data Sharing */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Sharing & Disclosure</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Vendors/Partners:</strong> Reward vendors, logistics providers, and campaign brands.</li>
          <li><strong>Payment Providers:</strong> Razorpay, PayU, and banking partners.</li>
          <li><strong>Authorities:</strong> As required by law (tax, fraud investigation, court orders).</li>
          <li><strong>Marketing Platforms:</strong> Google Ads, Meta Ads, only with your consent.</li>
        </ul>
      </div>

      {/* Data Retention */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
        <p>
          We retain your data only as long as necessary:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
          <li>User accounts: until deletion request</li>
          <li>Financial/transactional records: 8 years (as per Indian tax law)</li>
          <li>KYC documents: 5 years post-reward redemption</li>
          <li>Cookies: up to 2 years, unless cleared by you</li>
        </ul>
      </div>

      {/* Your Rights */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Access, correction, and deletion of personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Opt-out of marketing communications</li>
          <li>Data portability (where applicable)</li>
          <li>Lodge complaints with the Data Protection Board of India or relevant authorities</li>
        </ul>
      </div>

      {/* Security Measures */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
        <p>
          We implement organizational, technical, and physical safeguards:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
          <li>Encryption (AES-256, SSL/TLS)</li>
          <li>Role-based access controls</li>
          <li>Regular penetration testing & audits</li>
          <li>PCI-DSS compliant payment systems</li>
        </ul>
      </div>

      {/* Children’s Privacy */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Children’s Privacy</h2>
        <p>
          Kutoot is not directed at children under 18. If we discover data collected from a minor without consent, we will delete it promptly.
        </p>
      </div>

      {/* Contact */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          For questions or concerns regarding this Privacy Policy, contact our Grievance Officer at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong> privacy@kutoot.com <br />
          <strong>Address:</strong> Kutoot Innovations Pvt. Ltd., Bangalore, India
        </p>
      </div>

    </div>
            {/* {privacyPolicy && privacyPolicy.privacy_policy} */}
            {/* <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                1. What Are Terms and Conditions?
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                2. Ecommerce Terms and Conditions Examples
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7 mb-10">
                While it’s not legally required for ecommerce websites to have a
                terms and conditions agreement, adding one will help protect
                your online business.As terms and conditions are legally
                enforceable rules, they allow you to set standards for how users
                interact with your site. Here are some of the major benefits of
                including terms and conditions on your ecommerce site:
                <br />
                <br />
                has survived not only five centuries but also the on leap into
                electronic typesetting, remaining essentially unchanged. It
                wasn’t popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, andei more recently with
                desktop.
              </p>
              <div>
                <h2 className="text-[18px] font-medium text-qblack mb-5">
                  2. Does My Online Shop Need Terms and Conditions?
                </h2>

                <ul className="list-disc ml-5">
                  <li className="text-[15px] text-qgraytwo leading-7">
                    slim body with metal cover
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    8GB DDR4 RAM and fast 512GB PCIe SSD
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard, touchpad with gesture support
                  </li>
                </ul>
              </div>
            </div>

            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                3. Ecommerce Terms and Conditions Template [Free]
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book. five
                centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                4. What to Include in Terms and Conditions for Online Stores
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
                <br />
                <br />
                five centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book. It wasn’t popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages,
                andei more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum to make a type
                specimen book.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                05.Pricing and Payment Terms
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the on leap into electronic
                typesetting, remaining essentially unchanged. It wasn’t
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, andei more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum to make a type specimen book.
                <br />
                <br />
                five centuries but also the on leap into electronic typesetting,
                remaining essentially unchanged. It wasn’t popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, andei more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum to make a
                type specimen book. It wasn’t popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages,
                andei more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum to make a type
                specimen book.
                <br />
                <br />
                It has survived not only five centuries but also the on leap
                into electronic typesetting, remaining essentially unchanged. It
                wasn’t popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, andei more recently with
                desktop
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

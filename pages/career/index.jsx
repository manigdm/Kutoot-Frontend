import Accodion from "../../src/components/Helpers/Accodion";
import InputCom from "../../src/components/Helpers/InputCom";
import PageTitle from "../../src/components/Helpers/PageTitle";
import Layout from "../../src/components/Partials/Layout";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import LoaderStyleOne from "../../src/components/Helpers/Loaders/LoaderStyleOne";
import { toast } from "react-toastify";
import ServeLangItem from "../../src/components/Helpers/ServeLangItem";
export default function Careers({ }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const sendHandler = () => {
        setLoading(true);
        apiRequest
            .contact({
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
            .then((res) => {
                setLoading(false);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                toast.success(res && res.data.notification);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                setErrors(err.response.data.errors);
                if (err.response.status === 403) {
                    toast.error(err.response.data.message);
                }
            });
    };

    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className=" w-full mb-10">
                <div className="page-title w-full">
                    <PageTitle
                        title={ServeLangItem()?.Career_at_Kutoot}
                        breadcrumb={[
                            { name: ServeLangItem()?.home, path: "/" },
                            { name: ServeLangItem()?.FAQ, path: "/career" },
                        ]}
                    />
                </div>
            </div>
            <div
                className="space-y-4 text-[18px]"
                style={{
                    margin: "0 auto",      // centers the block horizontally
                    maxWidth: "1000px",     // keeps content readable
                    textAlign: "left",
                    marginBottom: "90px"
                }}
            >
                <h1 className=" text-3xl font-bold text-gray-900 text-center">
                    Careers at Kutoot
                </h1>


                <p >At Kutoot Innovations Pvt. Ltd., we’re on an exciting journey to build a rewards-driven e-
                    commerce ecosystem that not only surprises users but also redefines the shopping
                    experience and makes a meaningful social impact. Our vision is simple yet profound: Shop.
                    Win. Give.<br />
                    We’re not just another tech company. We’re a team of dreamers, builders, and doers who are
                    passionate about creating wow moments for our users while developing a platform capable
                    of reaching millions.</p>
                <p className="mt-4"><strong> 🌟 Why Work With Us?</strong>
                </p>
                <ul>
                    <li>(a) Impactful Work – Be part of a mission-driven company where every feature launched
                        makes a difference, creates joy, and supports social good.</li>
                    <li>(b) Innovation First – Work on cutting-edge solutions in e-commerce, gamification, digital
                        rewards, and large-scale platform development.</li>
                    <li>(c) Startup Culture – Experience flat hierarchies, open discussions, and fast decision-
                        making. Your ideas will matter from day one.</li>
                    <li>(d) Growth & Learning – With rapid scaling comes rapid growth — for the company and your
                        career.</li>
                </ul>

                <p className="mt-4"><strong>🚀 We’re Hiring Across:</strong>
                </p>
                <ul>
                    <li>(a) Technology & Development – Engineers, product managers, data scientists.</li>
                    <li>(b) Design & Creative – UI/UX designers, motion graphics experts, storytellers.</li>
                    <li>(c) Marketing & Growth – Digital marketers, campaign strategists, brand builders.</li>
                    <li>(d) Operations & Partnerships – Vendor managers, NGO liaisons, business development
                        leads.</li>
                    <li>(e) Customer Success – Support executives, community managers.</li>
                </ul>
                <p className="mt-4"><strong> 💡 How to Apply</strong>
                </p>
                <p>Think you can bring value to Kutoot? We’d love to hear from you!</p>
                <p className="mt-2">📩 Send your resume and portfolio (if applicable) to careers@kutoot.com with the subject
                    line: “Application – [Role Name]” .</p>
                <p className="mt-2">✨ At Kutoot, your work won’t just be a job — it will be a surprise-filled journey. Come build the
                    future of shopping, winning, and giving with us.</p>

            </div>
        </Layout>
    );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategorySection({
                             sectionTitle,
                             categories,

                         }) {
    return (
        <div data-aos="fade-up" className="category-section-wrapper w-full">
            <div className="container-x mx-auto pb-[60px]">
                <div>
                    {/*<div className="section-title flex justify-between items-center mb-5">*/}
                    {/*    <div>*/}
                    {/*        <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">*/}
                    {/*            {sectionTitle}*/}
                    {/*        </h1>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="w-full grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-[30px]">
                        {categories&&categories.length > 0 &&
                            categories
                                .slice(0, categories.length > 8 ? 8 : categories.length)
                                .map((item, i) => (
                                    <div
                                        data-aos="fade-left"
                                        data-aos-delay={i + "00"}
                                        key={i}
                                        className="item w-full cursor-pointer group"
                                    >
                                        <Link
                                            href={{
                                                pathname: "/products",
                                                query: {category: item.slug},
                                            }}
                                            passhref
                                        >
                                                <div
                                                    className="w-full h-[120px] w-[120px] relative bg-white flex justify-center items-center" style={{background: "#80808024", borderRadius: "15px"}}>
                                                    <div
                                                        className="w-full h-full relative transform scale-70 group-hover:scale-80 transition duration-300 ease-in-out" style={{margin: "10px"}}>
                                                        <Image
                                                            layout="fill"
                                                            objectFit="scale-down"
                                                            src={
                                                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-base txt-block text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                                                    {item.name}
                                                </p>
                                        </Link>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySection;

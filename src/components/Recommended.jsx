import React, { useEffect, useState } from "react";
import Card from "./Card";
import useWindowWidth from "../hooks/useWindowWidth";

const Recommended = () => {
    const [recommended, setRecommended] = useState([]);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const handleGetData = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            const recommendedData = data.filter((item) => item.isTrending === false);
            setRecommended(recommendedData);
        };
        handleGetData();
    }, []);
    return (
        <section className="">
            <h2 className="my-6 text-xl md:my-10 md:text-2xl xl:my-16">Recommended for you</h2>
            <div className="xl:grid-cols-4 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 xl:gap-10">
                {recommended.map((item) => (
                    <div className="">
                        <Card item={item} windowWidth={windowWidth} type="normalCard">
                            <div className="flex flex-col">
                                <div className="mt-2 mb-1 flex items-center gap-2 text-xs xl:text-sm text-[#ffffffbf]">
                                    <span>{item.year}</span>
                                    <span>•</span>
                                    <img className="size-3" src={`/images/icon-category-movie.svg`} alt="" />
                                    <span>{item.category}</span>
                                    <span>•</span>
                                    <span>{item.rating}</span>
                                </div>
                                <h3 className="md:text-lg xl:text-xl font-bold">{item.title}</h3>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recommended;

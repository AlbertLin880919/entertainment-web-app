import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const Trending = () => {
    const [trendingData, setTrendingData] = useState("");
    const handleGetData = async () => {
        const res = await fetch("data.json");
        const data = await res.json();
        setTrendingData(data.slice(0, 5));
    };
    useEffect(() => {
        handleGetData();
    }, []);
    console.log(trendingData);
    return (
        <>
            <h1 className="mb-4 mt-2 text-2xl md:mt-4">Trending</h1>
            <div className="flex items-center">
                {trendingData.map((item) => (
                    <div className="relative w-[240px]">
                        <img className="w-full rounded-xl object-cover" src={item.thumbnail.trending.small} alt="" />
                        <div className="absolute bottom-2 left-3">
                            <div className="flex items-center gap-2 text-sm text-[#]">
                                <span>{item.year}</span>
                                <span>•</span>
                                <img className="size-3" src={`/images/icon-category-movie.svg`} alt="" />
                                <span>{item.category}</span>
                                <span>•</span>
                                <span>{item.rating}</span>
                            </div>
                            <h3 className="font-bold">{item.title}</h3>
                        </div>
                        <div className="absolute right-3 top-2 flex size-8 items-center justify-center rounded-full bg-[#10141E] bg-opacity-50">
                            <img src={`/images/icon-bookmark-empty.svg`} className="size-4" alt="bookmark" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Trending;

import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import useWindowWidth from "../hooks/useWindowWidth";
import Card from "./Card";

const Trending = () => {
    const [trendingData, setTrendingData] = useState([]);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const handleGetData = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            setTrendingData(data.slice(0, 5));
        };
        handleGetData();
    }, []);
    return (
        <section className="w-full">
            <h1 className="mb-4 mt-2 text-xl md:mt-4 md:text-2xl xl:mb-6">Trending</h1>
            <Swiper
                modules={[FreeMode]}
                freeMode={true}
                spaceBetween={16}
                slidesPerView={"auto"}
                breakpoints={{
                    768: {
                        spaceBetween: 40,
                    },
                }}
            >
                {trendingData.map((item) => (
                    <SwiperSlide key={item.title} className="h-[140px] w-[240px] select-none md:h-[230px] md:w-[470px]">
                        <Card item={item} windowWidth={windowWidth}>
                            <div className="absolute bottom-2 left-3">
                                <div className="flex items-center gap-2 text-sm text-[#ffffffbf]">
                                    <span>{item.year}</span>
                                    <span>•</span>
                                    <img className="size-3" src={`/images/icon-category-movie.svg`} alt="" />
                                    <span>{item.category}</span>
                                    <span>•</span>
                                    <span>{item.rating}</span>
                                </div>
                                <h3 className="font-bold">{item.title}</h3>
                            </div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Trending;

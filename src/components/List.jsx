import React, { useEffect, useState } from "react";
import Card from "./Card";
import useWindowWidth from "../hooks/useWindowWidth";
import { useSearchStore } from "../stores/useStore";

const List = ({ category, filterData }) => {
    const [searchData, setSearchData] = useState([]);
    const windowWidth = useWindowWidth();
    const { searchQuery } = useSearchStore();
    console.log("@@searchData", searchData);
    useEffect(() => {
        if (searchQuery) {
            let data = filterData.filter(item => item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
            setSearchData(data);
        }else {
            setSearchData(filterData);
        }
    }, [searchQuery, filterData])
    return (
        <section>
            <h2 className="my-6 text-xl md:my-10 md:text-2xl">
                {searchQuery
                    ? `Found ${searchData.length} results for '${searchQuery}'`
                    : category === "home"
                      ? "Recommended for you"
                      : category}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 xl:gap-10">
                {searchData &&
                    searchData.map((item) => (
                        <div className="" key={item.title}>
                            <Card item={item} windowWidth={windowWidth} type="normalCard">
                                <div className="flex flex-col">
                                    <div className="mb-1 mt-2 flex items-center gap-2 text-xs text-[#ffffffbf] xl:text-sm">
                                        <span>{item.year}</span>
                                        <span>•</span>
                                        <img className="size-3" src={`/images/icon-category-movie.svg`} alt="" />
                                        <span>{item.category}</span>
                                        <span>•</span>
                                        <span>{item.rating}</span>
                                    </div>
                                    <h3 className="font-bold md:text-lg xl:text-xl">{item.title}</h3>
                                </div>
                            </Card>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default List;

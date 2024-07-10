import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";
import List from "./components/List";
import { useCategoryStore, useSearchStore } from "./stores/useStore";

const App = () => {
    const { category } = useCategoryStore();
    const { searchQuery } = useSearchStore();
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        const handleGetData = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            let recommendedData;
            if (category === "home") {
                recommendedData = data.filter((item) => item.isTrending === false);
            } else {
                recommendedData = data.filter((item) => item.category === category);
            }
            setFilterData(recommendedData);
        };
        handleGetData();
    }, [category]);

    return (
        <div className="bg-background md:p-6 xl:flex min-h-screen">
            <Navbar />
            <main className="flex flex-grow flex-col p-4 text-white xl:w-[90vw] xl:px-6 xl:pr-10">
                <Search />
                {category === "home" && !searchQuery && <Trending />}

                <List category={category} filterData={filterData} />
            </main>
        </div>
    );
};

export default App;

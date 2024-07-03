import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";

const App = () => {
    return (
        <div className="bg-background md:p-6 xl:flex">
            <Navbar />
            <main className="flex xl:w-[90vw] flex-grow flex-col p-4 text-white xl:px-6 xl:pr-10">
                <Search />
                <Trending />
                <Recommended />
            </main>
        </div>
    );
};

export default App;

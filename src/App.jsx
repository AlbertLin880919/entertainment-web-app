import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Trending from "./components/Trending";

const App = () => {
    return (
        <div className="bg-background h-screen md:p-6 xl:flex">
            <Navbar />
            <main className="flex flex-grow flex-col p-4 text-white xl:px-6">
                <Search />
                <Trending />
            </main>
        </div>
    );
};

export default App;

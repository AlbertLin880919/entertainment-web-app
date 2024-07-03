import React from "react";

const Search = () => {
    // px-4 py-6 xl:px-6 xl:py-4
    return (
        <div className="flex items-center gap-4 py-2 xl:py-0">
            <label htmlFor="search" className="pb-2">
                <img className="w-6 md:w-8" src="/images/icon-search.svg" alt="search" />
            </label>
            <input
                className="w-full border-[#5A698F] bg-transparent pb-2 text-white caret-themeColor outline-none focus:border-b search-input"
                type="text"
                id="search"
                placeholder="Search for movies or TV series"
            />
        </div>
    );
};

export default Search;

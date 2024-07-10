import React from "react";
import { useSearchStore } from "../stores/useStore";

const Search = () => {
    const { setSearchQuery } = useSearchStore();
    return (
        <div className="flex items-center gap-4 py-6 xl:py-4">
            <label htmlFor="search" className="pb-2">
                <img className="w-6 md:w-8" src="/images/icon-search.svg" alt="search" />
            </label>
            <input
                className="search-input w-full border-[#5A698F] bg-transparent pb-2 text-white caret-themeColor outline-none focus:border-b"
                type="text"
                id="search"
                placeholder="Search for movies or TV series"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;

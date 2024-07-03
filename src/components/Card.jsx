import React from "react";

const Card = ({ children, item, windowWidth, type }) => {
    const getThumbnailUrl = (item, windowWidth) => {
        if (item.thumbnail.trending) {
            return windowWidth > 1280 ? item.thumbnail.trending.large : item.thumbnail.trending.small;
        }
        if (!item.thumbnail.trending) {
            return windowWidth > 1280
                ? item.thumbnail.regular.large
                : windowWidth > 768
                  ? item.thumbnail.regular.medium
                  : item.thumbnail.regular.small;
        }
    };
    return (
        <div className={`relative ${type === "normalCard" ? '' : 'h-[140px] w-[240px] select-none md:h-[230px] md:w-[470px]'}`}>
            <img
                className="h-full w-full rounded-xl object-cover"
                src={getThumbnailUrl(item, windowWidth)}
                alt={item.title}
            />
            <div className="absolute right-3 top-2 flex size-8 items-center justify-center rounded-full bg-[#10141E] bg-opacity-50">
                <img src={`/images/icon-bookmark-empty.svg`} className="size-4" alt="bookmark" />
            </div>
            {children}
        </div>
    );
};

export default Card;

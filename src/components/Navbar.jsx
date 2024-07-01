import React from "react";
import { navBar } from "../constants";

const Navbar = () => {
    return (
        <div className="bg-navbarBg flex items-center justify-between p-4 md:rounded-xl xl:flex-col xl:rounded-2xl">
            <img className="h-[20px] w-[25px] md:h-[26px] md:w-[32px]" src="/images/logo.svg" alt="logo" />
            <ul className="flex gap-6 xl:flex-col">
                {navBar.map((item) => (
                    <li key={item.id} className="cursor-pointer">
                        <img src={item.src} alt={item.name} />
                    </li>
                ))}
            </ul>
            <img
                className="size-6 rounded-full border border-white md:size-8 xl:size-10"
                src="/images/image-avatar.png"
                alt="avatar"
            />
        </div>
    );
};

export default Navbar;

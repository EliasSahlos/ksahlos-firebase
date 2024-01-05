import { useState } from "react";
import { menuData } from "./menuData";
import {AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubMenu from "./sub-menu";

function NavMenu({ onLinkClick }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubMenuKey, setActiveSubMenuKey] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        if (menuItem.submenu) {
            setIsSubMenuOpen(!isSubMenuOpen);
            setActiveSubMenu(menuItem);
            setActiveSubMenuKey(menuItem.title);
        } else {
            onLinkClick();
        }
    };

    const handleCloseSubMenu = () => {
        setActiveSubMenu(null);
        setActiveSubMenuKey(null);
    };

    return (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white/80 backdrop-blur-lg z-10 overflow-hidden">
            <ul className="text-center">
                {menuData.map((menuItem) => (
                    <li className="my-5 text-xl" key={menuItem.title}>
                        {menuItem.submenu ? (
                            <button
                                className="hover:text-red-600 hover:scale-105 ease-in duration-300"
                                onClick={() => handleMenuItemClick(menuItem)}
                            >
                                {menuItem.title}
                            </button>
                        ) : (
                            <h1 className="hover:text-red-600 hover:scale-105 ease-in duration-300">
                                <Link onClick={onLinkClick} href={menuItem.url}>
                                    {menuItem.title}
                                </Link>
                            </h1>
                        )}
                        <AnimatePresence>
                            {isSubMenuOpen && activeSubMenu && activeSubMenuKey === menuItem.title && (
                                <SubMenu submenuItems={menuItem.submenu} onLinkClick={onLinkClick}/>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavMenu;

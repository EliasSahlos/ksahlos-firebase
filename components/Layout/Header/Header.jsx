import { useState } from "react";
import Hamburger from "hamburger-react";
import NavMenu from "./navMenu";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [HamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

    function hamburgerClickHandler() {
        setNavMenuIsOpen(!navMenuIsOpen);
    }

    function onLinkClick() {
        setNavMenuIsOpen(false);
        setHamburgerIsOpen(false);
    }

    return (
        <div className="flex justify-between items-center bg-white h-[32px] relative">
            <div className="flex-1">
                <div className="flex justify-center items-center scale-90 hover:scale-100 ease-in duration-300 cursor-pointer">
                        {/* <Link href={"/"}>
                            <Image 
                            src={'https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2Flogo.png?alt=media&token=661d3314-49d1-4d54-a0fb-e084a54fe783'} 
                            alt="logo"
                            width={400}
                            height={350}
                            loading="lazy"
                            />
                        </Link> */}
                        Logo Image
                </div>
            </div>
            <div className="absolute right-0 ml=[100px] md:hover:scale-110 z-30 ease-in duration-200" onClick={hamburgerClickHandler}>
                <Hamburger size={22} toggled={HamburgerIsOpen} toggle={setHamburgerIsOpen} />
            </div>
            {navMenuIsOpen && (
                <div>
                    <NavMenu onLinkClick={onLinkClick} />
                </div>
            )}
        </div>
    );
}

export default Header;
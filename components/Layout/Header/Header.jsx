import {useState} from "react";
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
        <div className="flex justify-between items-center bg-white h-[44px] 2xl:h-[64px] relative">
            <div className="flex-1">
                <div
                    className="flex justify-center items-center scale-90 hover:scale-100 ease-in duration-300 cursor-pointer">
                    <Link href={"/"}>
                        <Image
                            src={'https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2Fksahlos-logo.png?alt=media&token=5f0f99b1-a026-45b6-af58-ddeb30b58fa4'}
                            alt="logo"
                            width={400}
                            height={350}
                            loading="lazy"
                        />
                    </Link>
                </div>
            </div>
            <div className="absolute right-0 ml=[100px] md:hover:scale-110 z-30 ease-in duration-200"
                 onClick={hamburgerClickHandler}>
                <Hamburger size={22} toggled={HamburgerIsOpen} toggle={setHamburgerIsOpen}/>
            </div>
            {navMenuIsOpen && (
                <div>
                    <NavMenu onLinkClick={onLinkClick}/>
                </div>
            )}
        </div>
    );
}

export default Header;

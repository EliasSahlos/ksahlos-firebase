import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

function Footer() {
    return (
        <div className="flex justify-center items-center bg-white h-[44px] 2xl:h-[64px] font-light">
            <div className="flex items-center absolute left-0">
                <Link
                    className="hover:text-blue-500 hover:scale-125 ease-in duration-300 cursor-pointer"
                    target="_blank"
                    href="https://www.facebook.com/KSahlosPhoto/"
                >
                    <FacebookIcon className="text-lg md:text-xl mx-1 md:mx-2 mb-[3px] " />
                </Link>
                <Link
                    className="hover:text-pink-500 ease-in duration-300 hover:scale-125 cursor-pointer"
                    target="_blank"
                    href="https://www.instagram.com/ksahlos_photo/"
                >
                    <InstagramIcon className="text-lg md:text-xl mx-1 md:mx-2 mb-[3px] " />
                </Link>
            </div>
            <div className="flex md:flex-grow justify-center">
                <h1 className="md:text-[10px] text-[9px]">© {getCurrentYear()} Konstantinos Sahlos. All Rights Reserved</h1>
            </div>
        </div>
    );
}

export default Footer;

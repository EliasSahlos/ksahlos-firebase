import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function SubMenu({ submenuItems, onLinkClick }) {
    return (
        <div>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className=" pt-1 px-10"
            >
                <ul>
                    {submenuItems.map((submenuItem) => (
                        <motion.li
                            key={submenuItem.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link className="hover:text-red-600 ease-in duration-300" onClick={onLinkClick} href={submenuItem.url}>
                                <h1 className="my-3 text-sm">{submenuItem.title}</h1>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default SubMenu;

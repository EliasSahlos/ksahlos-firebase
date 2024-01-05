'use client'
import Masonry from '@mui/lab/Masonry';
import ModalComponent from "@/components/Modal/Photo-Modal/photo-modal";
import {useEffect, useState} from "react";
import {useAuth} from "@/utilities/auth-utility";
import Image from "next/image";

function MasonryGrid({photos}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    const user = useAuth();

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    function handleOpen(item) {
        setSelectedItem(item);
        setModalIsOpen(true);
    }

    function handleClose() {
        setModalIsOpen(false);
    }

    function modalCloseHandler() {
        handleClose();
    }

    function columnPickerHandler() {
        if (windowWidth <= 500) {
            return 2; //Columns on Mobile View
        } else {
            return 3; //Columns on Desktop View
        }
    }

    return (
        <Masonry columns={columnPickerHandler()} spacing={1}>
            {photos?.map((item, index) => (
                <div key={index} className="relative group">
                    <Image
                        src={item.url}
                        alt={item.title}
                        className="block w-full rounded shadow-lg"
                        width={800}
                        height={800}
                        quality={80}
                    />
                    <div
                        className="text-[15px] absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer rounded"
                        onClick={() => handleOpen(item)}
                    >
                        <h1 className="text-center">{item.title}</h1>
                        {user && <h1 className="text-center font-bold mx-4">[{item.number}]</h1>}
                    </div>
                    {selectedItem && modalIsOpen && (
                        <ModalComponent
                            itemImg={selectedItem.url}
                            itemDesc={selectedItem.desc}
                            itemTitle={selectedItem.title}
                            modalIsOpen={modalIsOpen}
                            onModalIsClosed={modalCloseHandler}
                        />
                    )}
                </div>
            ))}
        </Masonry>
    );
}

export default MasonryGrid;

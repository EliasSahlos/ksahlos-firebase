import Image from "next/image";
import Spinner from "@/components/Spinner/spinner";
import {motion, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from "react";
import {fadeAnimation} from "@/animations/fade-animation";
import ModalCloseButton from "@/components/Buttons/Photo-Modal-Buttons/close-button";
import ModalInfoButton from "@/components/Buttons/Photo-Modal-Buttons/info-button";

function ModalComponent({itemImg, itemDesc, itemTitle, onModalIsClosed}) {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isImageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        setImageLoading(true);
    }, [itemImg]);

    function modalCloseHandler() {
        onModalIsClosed();
    }

    const handleImageLoad = () => {
        setImageLoading(false);
    }

    function descriptionButtonClickHandler() {
        setIsDescriptionOpen(!isDescriptionOpen)
    }

    return (
        <div className='fixed inset-0 z-10' data-aos='zoom-in'>
            <div className="bg-white flex md:flex-row justify-between items-center p-12 w-full h-screen">
                <div className="w-full h-full relative">
                    {isImageLoading &&
                        <div className='flex justify-center items-center w-full h-screen'><Spinner/></div>}
                    <Image src={itemImg}
                           alt='broken-img'
                           layout='fill'
                           objectFit='contain'
                           objectPosition='center'
                           quality={90}
                           onLoad={handleImageLoad}/>
                    <AnimatePresence>
                        {isDescriptionOpen && (
                            <motion.div
                                {...fadeAnimation}
                                className="absolute inset-0 bg-white/40 backdrop-blur-md w-full h-full flex justify-center items-center"
                            >
                                <div className='mx-52 mb-24'>
                                    <h1 className='text-sm font-semibold text-center my-2'>{itemTitle}</h1>
                                    <hr className='mx-32'/>
                                    <h1 className='text-sm text-center'>{itemDesc}</h1>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:bottom-2 md:left-5 2xl:left-14 2xl:bottom-5">
                        <ModalCloseButton onModalCloseHandler={modalCloseHandler}/>
                        <ModalInfoButton onDescriptionButtonClickHandler={descriptionButtonClickHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;
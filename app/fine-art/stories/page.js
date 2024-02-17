'use client'
import MasonryGrid from "@/components/Masonry-Grid/masonry-grid";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getPhotos } from "@/firebase/get-photos";
import Spinner from "@/components/Spinner/spinner";

function StoriesGallery() {
    const [photosData, setPhotosData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const category = 'stories';

    const photosPerPage = 15;
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photosData.slice(indexOfFirstPhoto, indexOfLastPhoto);

    useEffect(() => {
        fetchData();
    }, []);

    console.log('photos', photosData);

    async function fetchData() {
        try {
            const storedData = localStorage.getItem('storiesStoredPhotos')
            if (storedData) {
                const retrievedArray = JSON.parse(storedData)
                setPhotosData(retrievedArray)
            } else {
                const data = await getPhotos(category);
                setPhotosData(data);
                localStorage.setItem('storiesStoredPhotos',JSON.stringify(data))
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div>
                <Head>
                    <title>Ksahlos - Local Art</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="p-2">
                    {photosData.length > 0
                        ? <>
                            <MasonryGrid photos={currentPhotos} />
                            <div className="flex justify-center items-center">
                                {/* Pagination Controls */}
                                {Array.from({ length: Math.ceil(photosData.length / photosPerPage) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => paginate(index + 1)}
                                        className={`mb-20 px-3 py-1 mx-1 border rounded ${currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </>
                        : <div className='flex justify-center items-center w-full h-screen'>
                            <Spinner />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default StoriesGallery;

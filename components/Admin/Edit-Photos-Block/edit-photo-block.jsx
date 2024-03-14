'use client'
import {useEffect, useState} from "react";
import PhotosTable from "./photos-table";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";

function EditPhotosBlock() {
    const [imageCategory, setImageCategory] = useState("Conceptual");
    //Photo categories
    const [conceptualPhotos, setConceptualPhotos] = useState([]);
    const [localArtPhotos, setLocalArtPhotos] = useState([]);
    const [blackAndWhitePhotos, setBlackAndWhitePhotos] = useState([]);
    const [dramaticPhotos, setDramaticPhotos] = useState([]);


    useEffect(() => {
        getIllusionPhotos();
        getLocalArtPhotos();
        getBlackAndWhitePhotos();
        getDramaticPhotos();
    }, []);

    //Warning: Illusion indexes to conceptual in database
    async function getIllusionPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "conceptual"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number);
        setConceptualPhotos(sortedPhotos);
    }

    async function getLocalArtPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "local-art"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number);
        setLocalArtPhotos(sortedPhotos);
    }

    async function getBlackAndWhitePhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "black-and-white"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number);
        setBlackAndWhitePhotos(sortedPhotos);
    }


    //Warning: Dramatic indexes to stories collection in database
    async function getDramaticPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "stories"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        const sortedPhotos = photosData.sort((a, b) => a.number - b.number);
        setDramaticPhotos(sortedPhotos);
    }

    function handleImageCategoryChange(e) {
        setImageCategory(e.target.value);
    }

    return (
        <div>
            <select
                className="flex  mx-auto mb-5 border-2 rounded shadow-md p-2"
                value={imageCategory}
                onChange={handleImageCategoryChange}
                required
            >
                <option value="conceptual" defaultChecked defaultValue>
                    Illusions (Conceptual old)
                </option>
                <option value="Black-And-White">Black-And-White</option>
                <option value="Local-Art">Local-Art</option>
                <option value="Stories">Dramatic (Stories old)</option>
            </select>

            {imageCategory === "conceptual" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={conceptualPhotos} imageCategory={imageCategory}/>
                </div>
            )}
            {imageCategory === "Local-Art" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={localArtPhotos} imageCategory={imageCategory}/>
                </div>
            )}
            {imageCategory === "Black-And-White" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={blackAndWhitePhotos} imageCategory={imageCategory}/>
                </div>
            )}
            {imageCategory === "Stories" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={dramaticPhotos} imageCategory={imageCategory}/>
                </div>
            )}
        </div>
    );
}

export default EditPhotosBlock;

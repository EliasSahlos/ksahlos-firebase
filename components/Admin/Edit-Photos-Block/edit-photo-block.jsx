'use client'
import {useEffect, useState} from "react";
import PhotosTable from "./photos-table";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";

function EditPhotosBlock() {
    const [imageCategory, setImageCategory] = useState("Conceptual");
    //Photo categories
    const [conceptualPhotos, setConceptualPhotos] = useState([]);
    const [minimalisticPhotos, setMinimalisticPhotos] = useState([]);
    const [localArtPhotos, setLocalArtPhotos] = useState([]);
    const [blackAndWhitePhotos, setBlackAndWhitePhotos] = useState([]);

    useEffect(() => {
        getConceptualPhotos();
        getMinimalisticPhotos();
        getLocalArtPhotos();
        getBlackAndWhitePhotos();
    }, []);

    async function getConceptualPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "conceptual"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        setConceptualPhotos(photosData);
    }

    async function getMinimalisticPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "minimalistic"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        setMinimalisticPhotos(photosData);
    }

    async function getLocalArtPhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "local-art"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        setLocalArtPhotos(photosData);
    }

    async function getBlackAndWhitePhotos() {
        const querySnapshot = await getDocs(collection(db, "photos", "gallery", "black-and-white"));
        const photosData = querySnapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
        setBlackAndWhitePhotos(photosData);
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
                <option value="Conceptual" defaultChecked defaultValue>
                    Conceptual
                </option>
                <option value="Minimalistic">Minimalistic</option>
                <option value="Black-And-White">Black-And-White</option>
                <option value="Local-Art">Local-Art</option>
            </select>

            {imageCategory === "Conceptual" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={conceptualPhotos} imageCategory={imageCategory}/>
                </div>
            )}
            {imageCategory === "Minimalistic" && (
                <div>
                    <b>{imageCategory} Photos</b>
                    <PhotosTable photos={minimalisticPhotos} imageCategory={imageCategory}/>
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
        </div>
    );
}

export default EditPhotosBlock;

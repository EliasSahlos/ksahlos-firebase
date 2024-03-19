import {useEffect, useState} from "react";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import Spinner from "../../Spinner/spinner";
import InfoAlert from "../../Alerts/Info-Alert/info-alert";
import {log} from "next/dist/server/typescript/utils";

function NewPhotoBlock() {
    const [imageTitle, setImageTitle] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageCategory, setImageCategory] = useState("Conceptual");
    const [image, setImage] = useState(null);
    const [imageNumber, setImageNumber] = useState(0);

    const [isUploading, setIsUploading] = useState(false);
    const [uploadFinishedAlert, setUploadFinishedAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const storage = getStorage();

    function handleImageUploadChange(e) {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    }

    function handleImageTitleChange(e) {
        setImageTitle(e.target.value);
    }

    function handleImageDescriptionChange(e) {
        setImageDescription(e.target.value);
    }

    function handleImageCategoryChange(e) {
        setImageCategory(e.target.value);
    }

    function handleImageNumberChange(e) {
        setImageNumber(e.target.value);
    }

    async function handleSubmit() {
        if (image) {
            setIsUploading(true);
            try {
                //Upload image to Firestore Storage
                const storageRef = ref(storage, `${imageCategory}/${imageTitle}`);
                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);

                //Write to Firestore Database
                const category = imageCategory.toLowerCase();
                const galleryRef = collection(db, `photos/gallery/${category}`);
                await addDoc(galleryRef, {
                    url: downloadURL,
                    title: imageTitle,
                    desc: imageDescription,
                    number: parseInt(imageNumber),
                });
                setIsUploading(false);
                setUploadFinishedAlert(true);
                clearInputs();
            } catch (error) {
                console.error("Error Msg:", error)
                setIsUploading(false);
                clearInputs();
                setErrorAlert(true);
            }
        }
    }

    function clearInputs() {
        setImageTitle("");
        setImageDescription("");
        setImageCategory("Conceptual");
        setImageNumber(imageNumber);
    }

    return (
        <div className="flex flex-col">
            {isUploading && (
                <div className="my-4">
                    <Spinner/>
                </div>
            )}
            {!isUploading && uploadFinishedAlert && (
                <div className="my-4">
                    <InfoAlert message={"Image was added successfully!"}/>
                </div>
            )}
            {!isUploading && errorAlert && (
                <div className="my-4 bg-red-200 rounded shadow-md p-3">
                    <h1 className="text-center">An Error Occurred!</h1>
                </div>
            )}

            <p className="text-sm">Image Title</p>
            <input
                className="mb-5 border-2 rounded shadow-md p-2"
                type="text"
                value={imageTitle}
                onChange={handleImageTitleChange}
                required
            />
            <p className="text-sm">Select A Category</p>
            <select className="mb-5 border-2 rounded shadow-md p-2" value={imageCategory}
                    onChange={handleImageCategoryChange} required>
                <option value="Conceptual" defaultChecked defaultValue>
                    Illusions (Old Conceptual)
                </option>
                <option value="Black-And-White">Black-And-White</option>
                <option value="Stories">Dramatic (Old Stories)</option>
                <option value="Local-art">Local-Art</option>
            </select>
            <p className="text-sm">Image Number</p>
            <input
                className="mb-5 border-2 rounded shadow-md p-2"
                type="text"
                value={imageNumber}
                onChange={handleImageNumberChange}
                required
            />
            <p className="text-sm">Image Description</p>
            <textarea
                className="mb-5 border-2 rounded shadow-md p-2"
                value={imageDescription}
                onChange={handleImageDescriptionChange}
                required
            />
            <input className="my-6" type="file" onChange={handleImageUploadChange} required/>
            <button className="bg-black text-white rounded shadow-md p-2 mx-14" onClick={handleSubmit}>
                Submit Photo
            </button>
        </div>
    );
}

export default NewPhotoBlock;

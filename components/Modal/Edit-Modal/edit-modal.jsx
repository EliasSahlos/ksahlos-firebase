import {Modal} from "@mui/material";
import ModalCloseButton from "../../Buttons/shared/modal-close";
import {useState} from "react";
import {db} from "../../../firebase/firebase";
import {doc, updateDoc} from "firebase/firestore";

function EditModal({
                       isEditModalOpen,
                       onModalCloseHandler,
                       onDocEditComplete,
                       selectedUID,
                       imageCategory,
                       selectedTitle,
                       selectedDescription,
                       selectedNumber,
                   }) {
    const [newTitle, setNewTitle] = useState(selectedTitle);
    const [newDescription, setNewDescription] = useState(selectedDescription);
    const [newNumber, setNewNumber] = useState(selectedNumber);

    function handleEditModalClose() {
        onModalCloseHandler();
    }

    function editCompleted(message) {
        onDocEditComplete(message);
    }

    function handleNewTitle(e) {
        setNewTitle(e.target.value);
    }

    function handleNewDescription(e) {
        setNewDescription(e.target.value);
    }

    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    async function handleSubmit() {
        try {
            const category = imageCategory.toLowerCase()
            const docRef = doc(db, `photos/gallery/${category}`, selectedUID);
            await updateDoc(docRef, {
                title: newTitle,
                desc: newDescription,
                number: parseInt(newNumber),
            });
            editCompleted("Edit successfully completed! Reload to see changes");
            handleEditModalClose();
            console.log("EDIT COMPLETE");
        } catch (error) {
            editCompleted("An Error Occurred!");
            console.log("EDIT ERROR");
        }
    }

    return (
        <div>
            <Modal
                open={isEditModalOpen}
                onClose={handleEditModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="flex justify-center items-center h-screen w-screen">
                    <div className="bg-white rounded shadow-md w-full mx-10 md:mx-80 p-8">
                        <div className="flex justify-end">
                            <ModalCloseButton onModalCloseHandler={handleEditModalClose}/>
                        </div>
                        <h1 className="text-sm my-4 font-bold">Photo Title</h1>
                        <input
                            className="border-[2px] w-full border-black rounded shadow-md p-2"
                            type="text"
                            placeholder="Photo Title.."
                            value={newTitle}
                            onChange={handleNewTitle}
                        />
                        <h1 className="text-sm my-4 font-bold">Photo Description</h1>
                        <textarea
                            className="border-[2px] w-full border-black rounded shadow-md p-2"
                            placeholder="Photo Description.."
                            value={newDescription}
                            onChange={handleNewDescription}
                        />
                        <h1 className="text-sm my-4 font-bold">Photo Number</h1>
                        <input
                            className="border-[2px] w-full border-black rounded shadow-md p-2"
                            type="number"
                            placeholder="Photo Number.."
                            value={newNumber}
                            onChange={handleNewNumber}
                        />
                        <div className="flex justify-center items-center mt-8">
                            <button className="bg-black rounded shadow-md p-2 text-white" onClick={handleSubmit}>
                                Submit Changes
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EditModal;

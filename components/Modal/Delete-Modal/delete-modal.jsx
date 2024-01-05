import Modal from "@mui/material/Modal";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../firebase/firebase"


function DeleteModal({
                         isDeleteModalOpen,
                         onHandleDeleteModalClose,
                         onDocDeletionComplete,
                         imageCategory,
                         selectedUID,
                         selectedTitle,
                     }) {

    async function handleDeleteClick() {
        const category = imageCategory.toLowerCase();
        try {
            const message = `Entry ${selectedTitle} deleted successfully! Reload to see changes`
            await deleteDoc(doc(db, "photos", "gallery", category, selectedUID));
            deletionCompleted(message)
        } catch (error) {
            console.error(error);
            const errorMessage = "An error occurred while deleting the entry.";
            deletionCompleted(errorMessage);
        }
    }


    function handleDeleteModalClose() {
        onHandleDeleteModalClose();
    }

    function deletionCompleted(message) {
        onDocDeletionComplete(message)
    }

    console.log("ISMODALOPEN", isDeleteModalOpen);
    return (
        <div>
            <Modal
                open={isDeleteModalOpen}
                onClose={handleDeleteModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="flex justify-center items-center h-screen w-screen">
                    <div className="bg-white rounded shadow-md p-4">
                        <div>
                            <h1 className="text-xl font-semibold text-red-500">Warning</h1>
                            <hr className="my-2"/>
                            Are you sure you want to delete this entry from the Database ?
                        </div>
                        <div className="flex justify-end items-center mt-8">
                            <button className="mx-10" onClick={handleDeleteModalClose}>
                                Cancel
                            </button>
                            <button
                                className="text-white bg-red-500 rounded shadow-md p-2 hover:bg-red-900 ease-in duration-200"
                                onClick={handleDeleteClick}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default DeleteModal;

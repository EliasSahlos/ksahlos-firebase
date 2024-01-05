import CloseIcon from "@mui/icons-material/Close";

function ModalCloseButton({onModalCloseHandler}) {
    function modalCloseHandler() {
        onModalCloseHandler();
    }

    return <CloseIcon className="hover:text-red-600 hover:scale-110 ease-in duration-200 cursor-pointer"
                      onClick={modalCloseHandler}/>;
}

export default ModalCloseButton;

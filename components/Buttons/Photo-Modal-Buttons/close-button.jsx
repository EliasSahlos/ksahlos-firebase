import CloseIcon from "@mui/icons-material/Close";

function ModalCloseButton({onModalCloseHandler}) {

    function modalCloseHandler(){
        onModalCloseHandler()
    }
    return (
        <button
            className='mx-2 bg-gray-300 w-8 rounded-md p-1 hover:bg-gray-600 ease-in duration-200 outline-none'
            onClick={modalCloseHandler}>
            <CloseIcon className="text-[16px] text-white"/>
        </button>
    )
}

export default ModalCloseButton
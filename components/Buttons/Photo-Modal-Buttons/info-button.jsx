import InfoIcon from "@mui/icons-material/Info";

function ModalInfoButton({onDescriptionButtonClickHandler}) {
    function descriptionButtonClickHandler(){
        onDescriptionButtonClickHandler()
    }

    return (
        <button
            className="bg-gray-300 w-8 rounded-md p-1 hover:bg-gray-600 ease-in duration-200 outline-none"
            onClick={descriptionButtonClickHandler}>
            <InfoIcon className='text-[16px] text-white'/>
        </button>
    )
}

export default ModalInfoButton
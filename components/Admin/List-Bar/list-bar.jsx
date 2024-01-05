import {getAuth, signOut} from "firebase/auth";
import {useAuth} from "@/utilities/auth-utility";
import {useRouter} from "next/navigation";

function ListBar({onNewPhotoBlockHandler, onEditPhotoBlockHandler}) {
    const user = useAuth();
    const router = useRouter()
    function logOutButtonHandler() {
        if (user) {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    console.log("Logged Out Successfully");
                    router.push("/");
                })
                .catch((error) => {
                    console.error("Error Logging Out : ", error);
                    router.push("/");
                });
        }
    }

    function newPhotoButtonHandler() {
        onNewPhotoBlockHandler()
    }

    function editPhotosBlockHandler() {
        onEditPhotoBlockHandler()
    }

    return (
        <div className="flex flex-col w-[15%] bg-[#F2F2F2] rounded shadow-md">
            <h1 className="text-center text-xl p-2">Admin Panel</h1>
            <hr/>
            <div className="flex flex-col h-full justify-center">
                <ul className=" text-gray-600 text-[18px] text-center">
                    <ul
                        className="my-4 cursor-pointer hover:text-red-600 hover:scale-110 ease-in duration-200"
                        onClick={newPhotoButtonHandler}
                    >
                        Add New Photo
                    </ul>
                    <ul
                        className="my-4 cursor-pointer hover:text-red-600 hover:scale-110 ease-in duration-200"
                        onClick={editPhotosBlockHandler}
                    >
                        Edit / Remove Photo
                    </ul>
                </ul>
            </div>
            <hr/>
            <div className="text-center">
                <h1
                    className="my-4 cursor-pointer hover:text-red-600 hover:scale-110 ease-in duration-200"
                    onClick={logOutButtonHandler}
                >
                    Log Out
                </h1>
            </div>
        </div>
    )
}

export default ListBar
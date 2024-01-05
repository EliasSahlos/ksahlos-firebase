'use client'
import {useState} from "react";
import {auth} from "@/firebase/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import ErrorAlert from "@/components/Alerts/Error-Alert/error-alert";
import {useRouter} from "next/navigation"

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorAlert, setErrorAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter()

    async function loginUserHandler(e) {
        e.preventDefault();
        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await router.push('/admin')
        } catch (error) {
            setErrorAlert(true);
            setErrorMessage(error);
        }
    }

    function emailInputHandler(e) {
        setEmail(e.target.value);
    }

    function passwordInputHandler(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="flex flex-col bg-white lg:w-[30%] p-16 rounded shadow-md">
            {errorAlert && errorMessage && (
                <ErrorAlert message={errorMessage}/>
            )}

            <h1 className="text-center text-xl">Admin Panel</h1>
            <hr className="mx-10 my-2"/>
            <input
                className="my-4 border-2 border-black rounded p-2"
                type="text"
                placeholder="Email"
                onChange={emailInputHandler}
                value={email}
            />
            <input
                className="my-4 border-2 border-black rounded p-2"
                type="password"
                placeholder="Password"
                onChange={passwordInputHandler}
                value={password}
            />
            <button className="bg-black rounded shadow-md p-2 text-white mt-4 mx-10" onClick={loginUserHandler}>
                Log In
            </button>
        </div>
    );
}

export default LoginForm;

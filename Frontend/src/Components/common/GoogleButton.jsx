import { FcGoogle } from "react-icons/fc";


export default function GoogleButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-lg border-2 border-gray-600 transition-all duration-200 font-medium`}
        >
            <FcGoogle />
            <span>Sign in with Google</span>
        </button>
    )
}

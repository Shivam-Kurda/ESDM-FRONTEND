import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../Components/Login';
function SignupSuccess() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-green-500 mb-4 justify-center flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-12">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
                    </svg>

                </div>
                <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                <p className="text-gray-600 mb-6">You have been successfully registered.</p>
                {/* <Link to="/login" className="text-blue-500 hover:underline">
                    Go to Login
                </Link> */}
                <LoginButton />
            </div>
        </div>
    );
}

export default SignupSuccess
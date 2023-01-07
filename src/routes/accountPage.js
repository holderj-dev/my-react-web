import React from "react";
import Navbar from "../conponents/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from 'react'
import GoogleButton from 'react-google-button'







export default function Account() {

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut
            console.log('you are out!!')
        } catch (error) {
            console.log(error)
        }

        // {user?.displayName ? }

    }



    const { googleSignIn } = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user != null) {

        }
    }, [user])

    return (
        <>
            <Navbar />
            <div className="bg-[#cad2c5] h-auto my-6 py-8 rounded-lg border-4">

                <div id="avatar" class="flex justify-center py-2">
                    <img class=" border p-2 rounded-lg border-[#52796f] bg-[#cad2c5] w-40 rounded-full" alt="user-image" src='https://api.multiavatar.com/NB.png' />
                </div>
                <div className="flex justify-center">
                    <h1 className="font-bold font-lg ">{user.displayName}</h1>
                </div>

                <div className="flex justify-center border-10 border-radius-5">
                    <div class="flex space-x-2 justify-center">
                        <div>
                            {user?.displayName ? <button type="button" onClick={handleSignOut} class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>

                                Logout
                            </button> : <div>
                                <h1 className=' animate-bounce flex justify-center py-6 px-10 font-bold '>Continue With Google.</h1>
                                <div className='flex justify-center max-w-[240px]m-auto py-4'>
                                    <GoogleButton onClick={handleGoogleSignIn} />
                                </div>
                            </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>

    )



}





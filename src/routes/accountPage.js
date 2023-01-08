import React from "react";
import { useState } from "react";
import Navbar from "../conponents/Navbar";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { storage } from "./firebase";
import { Avatar } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";








export default function Account() {

    const { user, logOut } = UserAuth();




    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
        // try {
        //     await logOut
        //     console.log('you are out!!')
        // } catch (error) {
        //     console.log(error)
        // }

        // // {user?.displayName ? }

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



    const [image, setImage] = useState('')
    const [Url, setUrl] = useState('')
    // const handleImageSwap = (e) => {
    //     if (e.target.files[0]) {
    //         setImage(e.target.files[0]);
    //     };
    // }

    // const handleSubmit = () => {
    //     const imageRef = ref(storage, "image");
    //     uploadBytes(imageRef, image).then(() => {
    //         storage.ref('images').child(image.name).getDownloadURL(imageRef)
    //             .than((url) => {
    //                 setUrl(url);
    //                 console.log(url)
    //             }).catch(error => {
    //                 console.log(error.message);
    //             })
    //         setImage(null);
    //     })

    // }

    const upload = () => {
        if (image == null)
            return;
        setUrl('getting Url Link...')

        storage.ref('/images/' + image.name).put(image)
            .on("state_changed", alert('success'), alert, () => {
                storage.ref("images").child(image.name).getDownloadURL(Url)
                    .than((url) => {
                        setUrl(url);
                    });

            });
    }

    // show and hide edit menu!!

    const [isToggled, setIsToggled] = useState(false)



    return (

        <>
            <Navbar />
            <div className="bg-[#cad2c5] h-auto my-6 py-8 rounded-lg border-4">

                <div id="avatar" class="flex justify-center py-2">
                    {user?.displayName ?<Avatar src={Url} sx={{ width: 150, height: 150 }} /> : <Avatar src='' sx={{ width: 150, height: 150 }} /> }
                    
                </div>


                <div className="flex justify-center border-10 border-radius-5">
                    <div class="flex space-x-2 justify-center">
                        <div>
                            {user?.displayName ? <>  <div className="flex justify-center scroll-px-px py-10 ">
                                    <h1 className="font-bold font-lg ">{user != null ? user.displayName : ''}
                                    </h1>
                                    <div class=" bg-blue-600 text-white border align-left font-medium text-xs leading-tight margin-auto rounded-md inset-y-0 right--10 marleft-40 shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        <a onClick={() => setIsToggled(!isToggled)} type="button" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>

                                </div> <button type="button" onClick={handleSignOut} class="border inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>

                                Logout
                            </button> </> : <div>
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

            {isToggled && <div class="flex justify-center mt-8">
                <div class="border rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                    <div class="m-4">
                        <label class="inline-block mb-2 text-gray-500">Upload
                            Image(jpg,png,svg,jpeg)</label>
                        <div class="flex items-center justify-center w-full">
                            <input type='file' onChange={(e) => { setImage(e.target.files[0]) }} />
                        </div>
                    </div>
                    <div class="flex p-2 space-x-4">

                        <button onClick={() => setIsToggled(!isToggled)} type='button' class="px-4 py-2 border text-white bg-red-500 rounded shadow-xl">Cancel</button>
                        <button onClick={upload} type='button' class="px-4 py-2 text-white bg-green-500 border rounded shadow-xl">Create</button>

                        <br />
                        <p> <a href={Url}> {Url} </a></p>

                    </div>
                </div>
            </div>}






        </>

    )



}

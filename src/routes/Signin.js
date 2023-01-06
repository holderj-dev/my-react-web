import Navbar from '../conponents/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'




const SignIn = () => {

    const {googleSignin} = UserAuth();

    const handleGoogleSignIn = async () => {
        try{
           await googleSignin();
        }
        catch (error) {
           console.log('error')
        }
    }

    return (

        <>
           <AuthContextProvider>
            <Navbar />

            <div className='max-w-[240px]m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignIn}/>
            </div>

            </AuthContextProvider>

        </>

    )
}


export default SignIn;
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Head from 'next/head'

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <Head>
                <title>Spotify Clone Login</title>
            </Head>
            <img 
                // src="assets/spotify-logo.png" 
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" 
                alt="spotify"
                className="h-40 mb-5"
            />

            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button 
                        className="bg-[#18d860] text-white px-5 py-2"
                        onClick={() => signIn(provider.id, { callbackUrl: "/"})}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders()

    return{
        props: {
            providers
        }
    }
}

export default Login
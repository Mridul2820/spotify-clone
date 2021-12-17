import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import spotifyApi from '../lib/spotify'

const useSpotify = () => {
    const { data: session } = useSession()

    // console.log(session)

    useEffect(() => {
        if(session){
            if(session.error === "RefreshAccessTokenError"){
                signIn()
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    }, [session])

    return spotifyApi
}

export default useSpotify

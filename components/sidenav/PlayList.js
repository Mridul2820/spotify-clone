import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../../atoms/playlistAtom'
import useSpotify from '../../hooks/useSpotify'

const PlayList = () => {
    const spotifyApi = useSpotify()
    const { data: session } = useSession()
    const [playlists, setPlaylists] = useState([])
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)
    
    useEffect(() => {
        if(spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then(data => {
                setPlaylists(data.body.items)
            })
        }
    }, [session, spotifyApi])

    // console.log("playlists", playlists)

    return (
        <div className="space-y-4 ml-5 pb-5 h-[calc(100vh-274px)] overflow-y-scroll scrollbar-hide">
            <p className="cursor-pointer hover:text-white" onClick={() => signOut()}>Your</p>
            {playlists.map(playlist => (
                <p 
                    key={playlist.id} 
                    onClick={() => setPlaylistId(playlist.id)}className="cursor-pointer hover:text-white"
                >
                    {playlist.name}
                </p>
            ))}
            
        </div>
    )
}

export default PlayList

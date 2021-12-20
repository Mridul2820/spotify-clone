import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
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

    return (
        <PlaylistScroll className="space-y-4 pl-5 pb-2 pt-5 h-[calc(100vh-274px)] overflow-y-scroll">
            <p className="cursor-pointer text-[#b3b3b3] hover:text-white" onClick={() => signOut()}>Logout</p>
            {playlists.map(playlist => (
                <p 
                    key={playlist.id} 
                    onClick={() => setPlaylistId(playlist.id)}className="text-[#b3b3b3] cursor-pointer hover:text-white"
                >
                    {playlist.name}
                </p>
            ))}
        </PlaylistScroll>
    )
}

const PlaylistScroll = styled.div`
    scrollbar-width: 11px;
    scrollbar-color: rgba(255,255,255,.3) transparent;

    &::-webkit-scrollbar {
        width: 11px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,.3);
    }
`

export default PlayList

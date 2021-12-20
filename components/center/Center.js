import { shuffle } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { playlistIdState, playlistState } from '../../atoms/playlistAtom'
import useSpotify from '../../hooks/useSpotify'
import CenterMain from './CenterMain'
import CenterTop from './CenterTop'
import Songs from './Songs'

const Center = () => {
    const [color, setColor] = useState(null);
    const spotifyApi = useSpotify()
    const playlistId = useRecoilValue(playlistIdState)
    const [ playlist, setPlaylist ] = useRecoilState(playlistState)

    const colors = [
        "from-indigo-500",
        "from-blue-500",
        "from-green-500",
        "from-red-500",
        "from-yellow-500",
        "from-pink-500",
        "from-purple-500"
    ]

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

    useEffect(() => {
        if(spotifyApi.getAccessToken()){
            spotifyApi.getPlaylist(playlistId)
            .then(({body}) => setPlaylist(body))
        }
    }, [playlistId])

    return (
        <CenterScroll className={`center-main flex-grow text-white h-[100vh] overflow-y-scroll  to-[#121212] ${color}`}>
            <CenterTop 
                playlist={playlist}
                color={color}
            />
            <CenterMain 
                color={color}
                playlist={playlist}
            />
            <Songs />
        </CenterScroll>
    )
}

const CenterScroll = styled.div`
    scrollbar-width: 12px;
    scrollbar-color: rgba(255,255,255,.3) #121212;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #121212;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,.3);
    }
`

export default Center

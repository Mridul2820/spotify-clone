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
        "#6366f1",
        "#3b82f6",
        "#22c55e",
        "#ef4444",
        "#eab308",
        "#ec4899",
        "#a855f7"
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
        <CenterScroll 
            id="center-main" 
            className="flex-grow text-white overflow-y-scroll h-[calc(100vh-90px)]"
            color={color}
        >
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
    background: ${({color}) => color && "linear-gradient(to top, #121212," + color + ")"};
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

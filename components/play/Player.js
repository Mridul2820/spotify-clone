import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentSongIdState, isPlayingState } from '../../atoms/songAtom'
import useSongInfo from '../../hooks/useSongInfo'
import useSpotify from '../../hooks/useSpotify'

const Player = () => {
    const spotifyApi = useSpotify()
    const songInfo = useSongInfo()
    const { data: session } = useSession()
    const [currentSongId, setCurrentSongId] = useRecoilState(currentSongIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(70);

    console.log(songInfo);

    return (
        <div>
            <div>
                <img 
                    src={songInfo?.album?.images[0]?.url} 
                    className="w-10 h-10" 
                />
            </div>
        </div>
    )
}

export default Player

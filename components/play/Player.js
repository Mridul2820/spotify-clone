import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentSongIdState, isPlayingState } from '../../atoms/songAtom'
import useSongInfo from '../../hooks/useSongInfo'
import useSpotify from '../../hooks/useSpotify'
import PlayAction from './PlayAction'
import PlayTools from './PlayTools'
import SongInfo from './SongInfo'

const Player = () => {
    const spotifyApi = useSpotify()
    const songInfo = useSongInfo()
    const { data: session } = useSession()
    const [currentSongId, setCurrentSongId] = useRecoilState(currentSongIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(70);

    const fetchCurrentSong = () => {
        if(songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then(data => {
                setCurrentSongId(data.body?.item?.id)

                spotifyApi.getMyCurrentPlaybackState().then(data => {
                    setIsPlaying(data.body?.is_playing)
                })
            })
        }
    }

    useEffect(() => {
        if(spotifyApi.getAccessToken() && !currentSongId){
            fetchCurrentSong()
            setVolume(70)
        }
    }, [currentSongIdState, spotifyApi, session])

    return (
        <div className="flex items-center px-4 h-[90px] bg-[#181818] border-b-[1px] border-[#282828]">
            <SongInfo 
                songInfo={songInfo}
                isPlaying={isPlaying}
            />
            <PlayAction 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
            />
            <PlayTools 
                volume={volume}
                setVolume={setVolume}
            />
        </div>
    )
}

export default Player

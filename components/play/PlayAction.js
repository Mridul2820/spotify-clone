import React from 'react'
import { BsShuffle } from 'react-icons/bs'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IoRepeat } from 'react-icons/io5'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { RiPauseCircleFill } from 'react-icons/ri'
import CountDuration from '../../lib/CountDuration'
import useSpotify from '../../hooks/useSpotify'

const PlayAction = ({ songInfo, isPlaying, setIsPlaying }) => {
    const spotifyApi = useSpotify()

    const PlayPause = async() => {
        if(spotifyApi.getAccessToken()){
            const status = await spotifyApi.getMyCurrentPlaybackState()
            if(status.body.is_playing){
                setIsPlaying(false)
                spotifyApi.pause();
            }
            else{
                setIsPlaying(true)
                spotifyApi.play();
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-[40%]">
            <div className="flex justify-center items-center text-[#b3b3b3] mb-2">
                <BsShuffle className="h-3 w-3 mx-3 cursor-pointer hover:text-white ease-out duration-75" />
                <BiSkipPrevious className="h-6 w-6 mx-3 cursor-pointer hover:text-white ease-out duration-75" />

                {isPlaying ? 
                    <RiPauseCircleFill 
                        onClick={PlayPause}  
                        className="h-8 w-8 mx-3 text-white cursor-pointer hover:scale-110 ease-out duration-75" 
                    /> 
                    : 
                    <BsFillPlayCircleFill 
                        onClick={PlayPause}
                        className="h-8 w-8 mx-3 text-white cursor-pointer hover:scale-110 ease-out duration-75" 
                    />
                } 

                <BiSkipNext 
                    className="h-6 w-6 mx-3 cursor-pointer hover:text-white ease-out duration-75" 
                />
                <IoRepeat 
                    className="h-4 w-4 mx-3 cursor-pointer hover:text-white ease-out duration-75"
                />
            </div>
            <div className="text-[#b3b3b3] flex items-center justify-between w-full">
                <span className="text-[12px] mx-1">0:00</span>
                <div 
                    className="w-full h-1 mx-1 relative rounded-full bg-[#535353] after:absolute after:left-0 after:w-[50%] after:pseudo-content-comma after:h-1 after:bg-[#1db954] after:rounded-full cursor-pointer after:cursor-pointer"
                />
                <span className="text-[12px] mx-1">{songInfo.duration_ms ? CountDuration(songInfo.duration_ms) : "0:00"}</span>
            </div>
        </div>
    )
}

export default PlayAction

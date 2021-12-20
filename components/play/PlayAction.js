import React from 'react'
import { BsShuffle } from 'react-icons/bs'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IoRepeat } from 'react-icons/io5'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { RiPauseCircleFill } from 'react-icons/ri'
import CountDuration from '../../lib/CountDuration'
import useSpotify from '../../hooks/useSpotify'
import styled from 'styled-components'

const PlayAction = ({ songInfo, isPlaying, setIsPlaying }) => {
    const spotifyApi = useSpotify()

    const PlayPause = async() => {
        if(spotifyApi.getAccessToken()){
            const status = await spotifyApi.getMyCurrentPlaybackState()
            if(status.body?.is_playing){
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
                <CustomInput 
                    // value={volume}
                    // volume={volume}
                    min={0} 
                    max={100} 
                    type="range"
                    className={`appearance-none max-w-[410px] w-[100%] h-1 mx-1 relative bg-[#535353] rounded-full outline-none focus:outline-none after:h-1 cursor-pointer`}
                    // onChange={(e) => setVolume(e.target.value)}
                />
                <span className="text-[12px] mx-1">{songInfo.duration_ms ? CountDuration(songInfo.duration_ms) : "0:00"}</span>
            </div>
        </div>
    )
}

const CustomInput = styled.input`
    &:hover {
        &:after {
            background: #1db954;
        }
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        height: 4px;
        background: #b3b3b3;
        cursor: pointer;
        /* width: ${({volume}) => volume + "%"}; */
        z-index: 2;

        &:hover {
            background: #1db954;
        }
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: #1db954;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, .5);
        position: relative;
        z-index: 3;
    }
    
    &::-moz-range-thumb {
        -webkit-appearance: none;
        background-color: #1db954;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, .5);
        position: relative;
        z-index: 3;
    }
`

export default PlayAction

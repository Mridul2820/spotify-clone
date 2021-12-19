import React from 'react'
import { BsShuffle } from 'react-icons/bs'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IoRepeat } from 'react-icons/io5'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { RiPauseCircleFill } from 'react-icons/ri'
import CountDuration from '../../lib/CountDuration'

const PlayAction = ({ songInfo, isPlaying }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center text-white mb-2">
                <BsShuffle className="h-3 w-3 mx-3 cursor-pointer hover:scale-110 ease-out duration-75" />
                <BiSkipPrevious className="h-6 w-6 mx-3 cursor-pointer hover:scale-110 ease-out duration-75" />

                {isPlaying ? 
                    <RiPauseCircleFill 
                        // onClick={PlayPause}  
                        className="h-8 w-8 mx-3 hover:text-gray-300 cursor-pointer hover:scale-110 ease-out duration-75" 
                    /> 
                    : 
                    <BsFillPlayCircleFill 
                        // onClick={PlayPause}
                        className="h-8 w-8 mx-3 hover:text-gray-300 cursor-pointer hover:scale-110 ease-out duration-75" 
                    />
                } 

                <BiSkipNext 
                    className="h-6 w-6 mx-3 cursor-pointer hover:scale-110 ease-out duration-75" 
                />
                <IoRepeat 
                    className="h-4 w-4 mx-3 cursor-pointer hover:scale-110 ease-out duration-75"
                />
            </div>
            <div className="text-[#b3b3b3] flex items-center justify-between w-full">
                <span className="text-[12px] mx-1">0:00</span>
                <div 
                    type="text" 
                    type="range"
                    // min={0}
                    // max={100} 
                    className="w-full h-1 mx-1 relative bg-[#535353] after:absolute after:left-0 after:w-[50%] after:pseudo-content-comma after:h-1 after:bg-[#b3b3b3]"
                />
                <span className="text-[12px] mx-1">{CountDuration(songInfo.duration_ms)}</span>
            </div>
        </div>
    )
}

export default PlayAction

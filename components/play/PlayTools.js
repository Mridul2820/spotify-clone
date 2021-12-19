import React from 'react'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BiVolumeFull } from 'react-icons/bi'
import { MdOutlineImportantDevices } from 'react-icons/md'
import { BsVolumeMuteFill } from 'react-icons/bs'

const PlayTools = ({ volume, setVolume }) => {
    console.log("volume", volume);
    return (
        <div className="flex justify-end items-center text-[#b3b3b3] mb-2 space-x-3 w-[30%]">
            <RiPlayList2Fill className="h-[18px] w-[18px] hover:text-white"/>
            <MdOutlineImportantDevices className="h-[18px] w-[18px] hover:text-white"/>
            {volume === 0 ?
                <BsVolumeMuteFill 
                    className="h-[18px] w-[18px] hover:text-white"
                    onClick={() => setVolume(50)}
                />
                :
                <BiVolumeFull 
                    className="h-[18px] w-[18px] cursor-pointer hover:text-white" 
                    onClick={() => setVolume(0)}
                />
            }
            
            {/* <div 
                className="w-[30%] h-1 mx-1 relative bg-[#535353] rounded-full after:rounded-full after:absolute after:left-0 after:w-[50%] after:pseudo-content-comma after:h-1 after:bg-[#b3b3b3] hover:after:bg-[#1db954] after::hover:bg-[#1db954] cursor-pointer after:cursor-pointer"
            /> */}

                <input 
                    value={volume}
                    min={0} 
                    max={100} 
                    type="range"
                    className="appearance-none w-[30%] h-1 mx-1 relative bg-[#535353] rounded-full outline-none focus:outline-none track"
                    onChange={(e) => setVolume(e.target.value)}
                />
        </div>
    )
}

export default PlayTools

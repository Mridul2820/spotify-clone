import React from 'react'
import { truncate } from 'lodash'
import { AiOutlineHeart } from 'react-icons/ai'

const SongInfo = ({ songInfo, isPlaying }) => {
    return (
        <div className="flex items-center w-[30%]">
        {isPlaying && 
            <>
            <img 
                src={songInfo?.album?.images[0]?.url} 
                className="w-14 h-14 mr-3" 
            />
            <div>
                <p className="text-[15px] whitespace-nowrap text-white cursor-pointer -mb-0.5">{truncate(songInfo.name, { 'length': 35 })}</p>
                <p className="text-[12px] text-gray-400 cursor-pointer -mt-0.5">
                {truncate(songInfo.artists?.map(artist => {return artist.name}).join(", "))}
                </p>
            </div>
            <AiOutlineHeart className="h-[18px] w-[18px] text-gray-400 ml-3" />
            </>
        }
        </div>
    )
}

export default SongInfo

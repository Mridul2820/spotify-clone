import React, { useCallback, useEffect } from 'react'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BiVolumeFull } from 'react-icons/bi'
import { MdOutlineImportantDevices } from 'react-icons/md'
import { BsVolumeMuteFill } from 'react-icons/bs'
import styled from 'styled-components'
import useSpotify from '../../hooks/useSpotify'
import { debounce } from 'lodash'

const PlayTools = ({ volume, setVolume }) => {
    const spotifyApi = useSpotify()

    useEffect(() => {
        if(spotifyApi.getAccessToken() && volume >= 0 && volume <= 100){
            debounceVolume(volume)
        }
    }, [volume])

    const debounceVolume = useCallback(
        debounce((volume) => {
            // spotifyApi.setVolume(volume)
        },500),
        [],
    );

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

            <CustomInput 
                value={volume}
                volume={volume}
                min={0} 
                max={100} 
                type="range"
                className={`appearance-none max-w-[95px] w-[100%] h-1 mx-1 relative bg-[#535353] rounded-full outline-none focus:outline-none after:h-1 cursor-pointer`}
                onChange={(e) => setVolume(e.target.value)}
            />
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
        width: ${({volume}) => volume + "%"} ;
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

export default PlayTools

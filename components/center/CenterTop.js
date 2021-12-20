import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsChevronDown, BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import useSpotify from '../../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { isPlayingState } from '../../atoms/songAtom'
import styled from 'styled-components'

const CenterTop = ({ color, playlist }) => {
    const { data: session } = useSession()
    const spotifyApi = useSpotify()
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const [showNav, setShowNav] = useState(false)

    const showNavBar = () => {
        if( typeof document !== "undefined" && document.getElementById('center-main').scrollTop >= 300) {
            setShowNav(true)
        }
        else {
            setShowNav(false)
        }
    }

    console.log(showNav);

    if (typeof document !== "undefined") {
        document.getElementById('center-main').addEventListener('scroll', showNavBar)
    }

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
        <Header 
            className={`fixed top-0 flex items-center h-16 px-8 w-[calc(100%-15rem)] ${showNav && "shownav after:bg-black after:opacity-50"}`}
            color={color}
        >
            <div className="flex text-white">
                <div className="h-8 w-8 mr-4 flex items-center justify-center rounded-full bg-[#000000b3]">
                    <MdArrowBackIosNew className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 mr-4 flex items-center justify-center rounded-full bg-[#000000b3]">
                    <MdArrowForwardIos className="h-4 w-4" />
                </div>
            </div>
            <div className="playlist-detail flex items-center">
                <div>
                    {isPlaying ? 
                        <div className="h-10 w-10 bg-[#1db954] text-white cursor-pointer rounded-full flex items-center justify-center hover:scale-105 ease-out duration-75">
                            <BsPauseFill 
                                onClick={PlayPause}
                                className="h-5 w-5" 
                            />                    
                        </div>
                        : 
                        <div className="h-10 w-10 bg-[#1db954] text-white cursor-pointer rounded-full flex items-center justify-center hover:scale-105 ease-out duration-75">
                            <BsPlayFill 
                                onClick={PlayPause}  
                                className="h-4 w-4" 
                            /> 
                        </div>
                    }
                </div>

                <span className="ml-4 text-[24px] font-bold">{playlist?.name}</span>
            </div>

            <div className="flex items-center bg-black space-x-2 opacity-90 hover:opacity-100 cursor-pointer rounded-full p-1 pr-2 absolute right-5 top-[50%] translate-y-[-50%]">
                <img 
                    src={session?.user.image} 
                    alt={session?.user.name}  
                    className="w-8 h-8 rounded-full"
                />
                <h3>{session?.user.name}</h3>
                <BsChevronDown className="h-4 w-4" />
            </div>
        </Header>
    )
}

const Header = styled.header`
    transition: all .5s;
    z-index: 5;

    .playlist-detail {
        opacity: 0;
        visibility: hidden;
        transition: all .5s;
    }

    &.shownav {
        background: ${({color}) => color};

        .playlist-detail {
            opacity: 1;
            visibility: visible;
        }
    }

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: all .5s;
        z-index: -1;
    }
`

export default CenterTop

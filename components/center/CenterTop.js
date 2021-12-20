import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsChevronDown, BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import useSpotify from '../../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { isPlayingState } from '../../atoms/songAtom'

const CenterTop = ({ color, playlist }) => {
    const { data: session } = useSession()
    const spotifyApi = useSpotify()
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const [showNav, setShowNav] = useState(false)

    // const showNavBar = () => {
    //     if(document.querySelector('.center-main').scrollY >= 30) {
    //         setShowNav(true)
    //     }
    //     else {
    //         setShowNav(false)
    //     }
    // }

    // console.log(showNav);

    // if (typeof window !== "undefined" && typeof document !== "undefined") {
    //     document.querySelector('.center-main').addEventListener('scroll', showNavBar)
    // }

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
        <header className="fixed top-0 flex items-center h-[60px] px-8 w-[calc(100%-15rem)]">
            <div className="flex text-white">
                <div className="h-8 w-8 mr-4 flex items-center justify-center rounded-full bg-[#000000b3]">
                    <MdArrowBackIosNew className="h-4 w-4" />
                </div>
                <div className="h-8 w-8 mr-4 flex items-center justify-center rounded-full bg-[#000000b3]">
                    <MdArrowForwardIos className="h-4 w-4" />
                </div>
            </div>
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

            <div className="flex items-center bg-black space-x-2 opacity-90 hover:opacity-100 cursor-pointer rounded-full p-1 pr-2 absolute right-5 top-[50%] translate-y-[-50%]">
                <img 
                    src={session?.user.image} 
                    alt={session?.user.name}  
                    className="w-8 h-8 rounded-full"
                />
                <h3>{session?.user.name}</h3>
                <BsChevronDown className="h-4 w-4" />
            </div>
        </header>
    )
}

export default CenterTop

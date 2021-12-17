import React, { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistAtom, playlistIdState } from '../../atoms/playlistAtom';
import useSpotify from '../../hooks/useSpotify';

const CenterMain = () => {
    const [color, setColor] = useState(null);
    const spotifyApi = useSpotify()
    const playlistId = useRecoilValue(playlistIdState)
    const [ playlist, setPlaylist ] = useRecoilState(playlistAtom)

    const colors = [
        "from-indigo-500",
        "from-blue-500",
        "from-green-500",
        "from-red-500",
        "from-yellow-500",
        "from-pink-500",
        "from-purple-500"
    ]

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then(data => {
            setPlaylist(data.body)
        }).catch(err => console.log("Something Went wrong", err))
    }, [spotifyApi, playlistId])

    console.log("playlist", playlist)

    return (
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
            <img 
                src={playlist?.images[0]?.url} 
                alt={playlist?.name} 
                className="h-56 w-56 shadow-2xl"
            />
            <div>
                <h2 className="text-[13px]">PLAYLIST</h2>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold spacing tracking-tighter mb-4">{playlist?.name}</h1>
                <p className="text-[14px] opacity-60 mb-2">{playlist?.description}</p>
                <div>
                    <span className="text-[15px]">{playlist?.owner.display_name}</span>{" • "}
                    {playlist?.followers.total > 0 && 
                        <>
                            <span className="text-[15px] opacity-60">
                                {playlist?.followers.total} 
                                {playlist?.followers.total === 1 ? " like" : " likes"}
                            </span>
                            {" • "}
                        </>
                    }
                    {playlist?.tracks.total > 0 &&
                        <>
                            <span className="text-[15px] opacity-60">
                                {playlist?.tracks.total} 
                                {playlist?.tracks.total === 1 ? " song" : " songs"}
                            </span>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default CenterMain

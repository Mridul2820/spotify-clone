import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../../atoms/playlistAtom'
import Song from './Song'
import { FiClock } from 'react-icons/fi'

const Songs = () => {
    const playlist = useRecoilValue(playlistState)

    // console.log(playlist);

    return (
        <div className="px-5 flex flex-col pb-4 space-y-1 text-white bg-[#121212]">
            <div className="grid gap-4 grid-cols-gridsongsm md:grid-cols-gridsong items-center sticky top-16 bg-[#121212] px-0 sm:px-3 mb-4 py-2 text-gray-400 border-b-[1px] border-gray-600 tracking-wider">
                <span className="text-[16px] hidden md:block">#</span>
                <span className="text-[13px]">TITLE</span>
                <span className="text-[13px] hidden md:block">ALBUM</span>
                <span className="text-[13px] hidden md:block">DATE ADDED</span>
                <span><FiClock className="h-4 w-4"/></span>
            </div>
            {playlist?.tracks.items.map((track, i) => (
                <Song 
                    key={track.track.id}
                    order={i}
                    track={track.track}
                    added_at={track.added_at}
                />
            ))}
        </div>
    )
}

export default Songs

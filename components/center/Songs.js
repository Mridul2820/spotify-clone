import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../../atoms/playlistAtom'
import { ClockIcon } from  '@heroicons/react/outline'
import Song from './Song'

const Songs = () => {
    const playlist = useRecoilValue(playlistState)

    // console.log(playlist);

    return (
        <div className="px-5 flex flex-col space-y-1 pb-28 text-white">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-gridsong items-center px-3 mb-4 pb-2 text-gray-400 border-b-[1px] border-gray-600 tracking-wider">
                <span className="text-[16px] hidden md:block">#</span>
                <span className="text-[13px] ml-4">TITLE</span>
                <span className="text-[13px] ml-4 hidden md:block">ALBUM</span>
                <span className="text-[13px] ml-4 hidden md:block">DATE ADDED</span>
                <span className="ml-4 hidden md:block"><ClockIcon className="h-4 w-4"/></span>
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

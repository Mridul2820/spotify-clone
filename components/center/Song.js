import { truncate } from 'lodash';
import React from 'react'
import { useRecoilState } from 'recoil';
import { currentSongIdState, isPlayingState } from '../../atoms/songAtom';
import useSpotify from '../../hooks/useSpotify'
import CountDuration from '../../lib/CountDuration';

const Song = ({ track, order, added_at }) => {
    const spotifyApi = useSpotify()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentSongIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

    let DateFormat = { month: 'short', day: '2-digit', year: "numeric" };

    const playSong = () => {
        setCurrentTrackId(track.id)
        setIsPlaying(true)
        // spotifyApi.play({
        //     uris: [track.uri]
        // })
    }

    return (
        <div className="grid gap-5 grid-cols-gridsongsm md:grid-cols-gridsong items-center px-0 sm:px-3 h-14 hover:bg-[#ffffff1a] rounded-md cursor-auto" onDoubleClick={playSong}>
            <p className="hidden md:block cursor-default">{order + 1}</p>
            <div className="inline-flex items-center">
                <img 
                    src={track.album.images[0].url}
                    alt={track.name}
                    className="w-10 mr-4"
                />
                <div>
                    <p className="text-[16px] whitespace-nowrap">{truncate(track.name, { 'length': 35 })}</p>
                    <p className="text-[14px] text-gray-400">
                    {truncate(track.artists
                        .map(artist => {return artist.name})
                        .join(", ")
                    )}
                    </p>
                </div>
            </div>
            <div className="hidden md:block">
                <p className="text-[14px] text-gray-400">{truncate(track.album.name, { 'length': 35 })}</p>
            </div>

            <div className="hidden md:block">
                <p className="text-[14px] text-gray-400">{new Date(added_at).toLocaleDateString("en-US", DateFormat)}</p>
            </div>

            <div className="block">
                <p className="text-[14px] text-gray-400">{CountDuration(track.duration_ms)}</p>
            </div>
        </div>
    )
}

export default Song

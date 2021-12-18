import React from 'react'
import useSpotify from '../../hooks/useSpotify'

const Song = ({ track, order, added_at }) => {
    const spotifyApi = useSpotify()
    let options = { month: 'short', day: '2-digit', year: "numeric" };

    return (
        <div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-gridsong items-center space-x-4 px-3">
                <p className="hidden md:block">{order + 1}</p>
                <div className="flex items-center">
                    <img 
                        src={track.album.images[0].url}
                        alt={track.name}
                        className="w-10 mr-4"
                    />
                    <div>
                        <p className="text-[16px]">{track.name}</p>
                        <p className="text-[14px] text-gray-400">
                        {track.artists
                            .map(artist => <React.Fragment key={artist.id}>{artist.name}</React.Fragment>)
                            .reduce((prev, curr) => [prev, ', ', curr])
                        }
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-[14px] text-gray-400">{track.album.name}</p>
                </div>

                <div className="hidden md:block">
                    <p className="text-[14px] text-gray-400">{new Date(added_at).toLocaleDateString("en-US", options)}</p>
                </div>

                <div className="hidden md:block">
                    <p className="text-[14px] text-gray-400">Duration</p>
                </div>
            </div>
        </div>
    )
}

export default Song

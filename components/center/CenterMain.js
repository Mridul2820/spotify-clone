import React from 'react'
import styled from 'styled-components'

const CenterMain = ({ color, playlist }) => {
    return (
        <CenterHead 
            className={`flex items-end space-x-7 bg-gradient-to-b text-white p-8 h-[30vh] max-h-[500px] min-h-[340px]`}
            color={color}
        >
            <img 
                src={playlist?.images[0]?.url} 
                alt={playlist?.name} 
                className="h-48 w-48 shadow-2xl"
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
        </CenterHead>
    )
}

const CenterHead = styled.section`
    background: ${({color}) => color && "linear-gradient(to top, #121212," + color + ")"};
`

export default CenterMain

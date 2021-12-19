import React from 'react'
import { CgHome } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { BiLibrary, BiRss } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai'

const TopBar = () => {
    return (
        <div className="space-y-4 p-5 pr-0 text-[#b3b3b3]">
            <button className="flex items-center space-x-2 hover:text-white">
                <CgHome className="h-5 w-5" />
                <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <FiSearch className="h-5 w-5" />
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <BiLibrary className="h-5 w-5" />
                <p>Your Library</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900" />

            <button className="flex items-center space-x-2 hover:text-white">
                <AiOutlinePlusCircle className="h-5 w-5" />
                <p>Create Playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <AiOutlineHeart className="h-5 w-5" />
                <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <BiRss className="h-5 w-5" />
                <p>Your Episodes</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900" />
        </div>
    )
}

export default TopBar

import React from 'react'
import CenterMain from './CenterMain'
import CenterTop from './CenterTop'
import Songs from './Songs'

const Center = () => {
    return (
        <div className='flex-grow text-white h-[100vh] overflow-y-scroll scrollbar-hide'>
            <CenterTop />
            <CenterMain />
            <Songs />
        </div>
    )
}

export default Center

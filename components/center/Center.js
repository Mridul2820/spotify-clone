import React from 'react'
import CenterMain from './CenterMain'
import CenterTop from './CenterTop'

const Center = () => {
    return (
        <div className='flex-grow text-white'>
            <CenterTop />
            <CenterMain />
        </div>
    )
}

export default Center

import React from 'react'
import PlayList from './PlayList'
import TopBar from './TopBar'

const SideBar = () => {
    return (
        <div className="text-gray-500 p-5 text-sm">
            <TopBar />
            <PlayList/>
        </div>
    )
}

export default SideBar

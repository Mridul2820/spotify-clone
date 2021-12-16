import { useSession } from 'next-auth/react'
import React from 'react'
import PlayList from './PlayList'
import TopBar from './TopBar'

const SideBar = () => {
    const { data: session, status} = useSession()

    console.log(status)

    return (
        <div className="text-gray-500 p-5 text-sm">
            <TopBar />
            <PlayList/>
        </div>
    )
}

export default SideBar

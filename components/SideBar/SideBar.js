import { useSession } from 'next-auth/react'
import React from 'react'
import PlayList from './PlayList'
import TopBar from './TopBar'

const SideBar = () => {
    const { data: session, status} = useSession()

    return (
        <div className="text-gray-500 text-sm border-r border-gray-900 h-screen pr-5 sm:max-w-[12rem] lg:max-w-[15rem] min-w-[14rem] hidden md:inline-flex flex-col">
            <TopBar />
            <PlayList/>
        </div>
    )
}

export default SideBar

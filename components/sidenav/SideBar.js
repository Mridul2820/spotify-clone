import React from 'react'
import PlayList from './PlayList'
import TopBar from './TopBar'
import { BsArrowDownCircle } from 'react-icons/bs'

const SideBar = () => {
    return (
        <div className="text-gray-500 text-sm border-r border-gray-900 h-screen sm:max-w-[12rem] lg:max-w-[15rem] min-w-[14rem] hidden md:inline-flex flex-col">
            <TopBar />
            <PlayList/>
            <div className="flex items-center pt-2 pb-[100px] pl-5 hover:text-white cursor-pointer">
                <BsArrowDownCircle className="h-5 w-5 mr-4" />
                <span>Install App</span>
            </div>
        </div>
    )
}

export default SideBar

import React from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const CenterTop = () => {
    const { data: session } = useSession()

    return (
        <header className="absolute top-5 right-5">
            <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-100 cursor-pointer rounded-full p-1 pr-2">
                <img 
                    src={session?.user.image} 
                    alt={session?.user.name}  
                    className="w-8 h-8 rounded-full"
                />
                <h3>{session?.user.name}</h3>
                <ChevronDownIcon className="h-4 w-4" />
            </div>
        </header>
    )
}

export default CenterTop

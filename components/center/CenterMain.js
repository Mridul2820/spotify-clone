import React, { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useRecoilValue } from 'recoil';
import { playlistIdState } from '../../atoms/playlistAtom';

const CenterMain = () => {
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState)

    const colors = [
        "from-indigo-500",
        "from-blue-500",
        "from-green-500",
        "from-red-500",
        "from-yellow-500",
        "from-pink-500",
        "from-purple-500"
    ]
    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

    return (
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
            <h1>hello</h1>
        </section>
    )
}

export default CenterMain

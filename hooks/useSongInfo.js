import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { currentSongIdState } from '../atoms/songAtom'
import useSpotify from "./useSpotify";

const useSongInfo = () => {
    const spotifyApi = useSpotify();
    const [currentSongId, setCurrentSongId] = useRecoilState(currentSongIdState);
    const [songInfo, setSongInfo] = useState({});

    useEffect(() => {
        const fetchSongInfo = async() => {
            if(currentSongId){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentSongId}`,
                    {
                        headers:{
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                        }
                    }
                ).then(res => res.json())

                setSongInfo(trackInfo);
            }
        }
        fetchSongInfo();
    }, [spotifyApi, currentSongId])

    return songInfo
}

export default useSongInfo

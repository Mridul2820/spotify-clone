import { atom } from "recoil";

export const currentSongIdState = atom({
    key: 'CurrentSongIdState',
    default: null
})

export const isPlayingState = atom({
    key: 'IsPlayingState',
    default: false
})
import { atom } from "recoil";

export const currentSongIdState = atom({
    key: 'currentSongIdState',
    default: null
})

export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false
})
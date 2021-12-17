import { atom } from 'recoil';

export const playlistIdState = atom({
    key: 'playlistIdState',
    default: '37i9dQZF1EUMDoJuT8yJsl',
});

export const playlistAtom = atom({
    key: 'playlistState',
    default: null,
});
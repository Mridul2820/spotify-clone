import { atom } from 'recoil';

export const playlistIdState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '37i9dQZF1EUMDoJuT8yJsl', // default value (aka initial value)
});
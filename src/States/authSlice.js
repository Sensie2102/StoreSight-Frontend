import { atom, selector } from 'recoil';

export const accessTokenState = atom({
    key: 'accessTokenState',
    default: localStorage.getItem('access_token') || null,
});

export const isAuthenticatedState = selector({
    key: 'isAuthenticatedState',
    get: ({ get }) => {
        const token = get(accessTokenState);
        console.log('Current token:', token);
        console.log('Is authenticated:', !!token);
        return !!token;
    },
});

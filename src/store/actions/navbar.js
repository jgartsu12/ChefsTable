import {
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from './types'

export function setNavbarLinks() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'Home'
            },
            {
                _id: 1,
                title: 'About Us'
            },
            {
                _id: 2,
                title: 'Soups'
            },
            {
                _id: 3,
                title: 'Breakfast'
            },
            {
                _id: 4,
                title: 'Lunch'
            },
            {
                _id: 5,
                title: 'Photo Blog'
            },
            {
                _id: 6,
                title: 'Phlog Manager'
            },
            {
                _id: 6,
                title: 'Logout'
            },
        ]
    });
};

export function changeNavbarActive(_id) {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payload: _id
    });
};
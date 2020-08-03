import * as actionTypes from './actionTypes';

export const modalOpen = () =>{
    return {
        type: actionTypes.HEADER_MODAL_OPEN,
    };
};

export const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('first_name');
    return {
        type: actionTypes.LOGOUT_START
    };
};

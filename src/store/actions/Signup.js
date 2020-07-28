import * as actionTypes from './actionTypes';

export const signup = (message) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        displayMsg: message
    };
};

export const modalClose = () =>{
    return {
        type: actionTypes.SIGNUP_MODAL_CLOSE,
    };
};

export const tabChange = (index)=>{
    return {
        type: actionTypes.SIGNUP_TAB_CHANGE,
        tab:index
    };
}

export const closeSnackBar = ()=>{
    return{
        type:actionTypes.SIGNUP_SNACKBAR_CLOSE,
    }
}
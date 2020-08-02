import { updateObject } from '../utility';

export const loginSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        userFirstName: action.userFirstName,
        showModal: action.showModal,
        userLoginSuccess: action.userLoginSuccess,
        error: null
     } );
};


export const loginFail = (state, action) => {
    return updateObject( state, { 
        error: action.error
     } );
};


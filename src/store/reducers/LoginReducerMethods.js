import { updateObject } from '../utility';

export const loginSuccess = (state, action) => {
    // console.log("action:"+JSON.stringify(action));
    return updateObject( state, { 
        token: action.token,
        userFirstName: action.userFirstName,
        showModal: action.showModal,
        userLoginSuccess: action.userLoginSuccess,
        error: null,
        authRedirectPath: action.path
     } );
};

export const resetLoginState = (state,action)=>{
    return updateObject( state, { 
        token: null,
        userFirstName: null,
        showModal: false,
        userLoginSuccess: false,
        error: null,
        authRedirectPath: "/"
     } );
}


export const loginFail = (state, action) => {
    return updateObject( state, { 
        error: action.error
     } );
};


import { updateObject } from '../utility';

export const modalOpen=(state,action)=>{
    return updateObject( state, { tabIndex: 0,userSignupSuccess:false,showModal:true} );
}

export const logoutStart=(state,action)=>{

    return updateObject( state, { 
        token: null,
        userFirstName: null,
        // showModal: action.showModal,
        userLoginSuccess: false,
        error: null
     } );
}
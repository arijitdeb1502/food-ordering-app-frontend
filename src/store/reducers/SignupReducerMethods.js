import { updateObject } from '../utility';

//Signup Form Reducers
export const signup=(state,action)=>{
    return updateObject( state, { userSignupSuccess: true,snackbarMessage: action.displayMsg,tabIndex:0} );
}

export const modalClose=(state,action)=>{
    return updateObject( state, { tabIndex: 0,userSignupSuccess:false,showModal:false,error:null} );
}

export const tabChange=(state,action)=>{
    return updateObject(state,{tabIndex: action.tab,error:null})
}

export const closeSnackBar=(state,action)=>{
    return updateObject( state, { userSignupSuccess: false} );

}
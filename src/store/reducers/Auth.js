import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userSignupSuccess: false,
    snackbarMessage:'',
    tabIndex: 0
};

const signup=(state,action)=>{
    return updateObject( state, { userSignupSuccess: true,snackbarMessage: action.displayMsg,tabIndex:0} );
}

const modalClose=(state,action)=>{
    return updateObject( state, { tabIndex: 0,userSignupSuccess:false} );
}

const tabChange=(state,action)=>{
    return updateObject(state,{tabIndex: action.tab})
}

const closeSnackBar=(state,action)=>{
    return updateObject( state, { userSignupSuccess: false} );

}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_SUCCESS: return signup(state, action);
        case actionTypes.SIGNUP_MODAL_CLOSE: return modalClose(state,action);
        case actionTypes.SIGNUP_TAB_CHANGE: return tabChange(state,action);
        case actionTypes.SIGNUP_SNACKBAR_CLOSE: return closeSnackBar(state,action);
        default:
            return state;
    }
};

export default reducer;
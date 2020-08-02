import * as actionTypes from '../actions/actionTypes';
import {
    signup,
    modalClose,
    tabChange,
    closeSnackBar
} from './SignupReducerMethods';
import {
   loginStart
} from './LoginReducerMethods';

const initialState = {
    userSignupSuccess: false,
    snackbarMessage:'',
    tabIndex: 0,
    token: null,
    userContactNo: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_SUCCESS: return signup(state, action);
        case actionTypes.SIGNUP_MODAL_CLOSE: return modalClose(state,action);
        case actionTypes.SIGNUP_TAB_CHANGE: return tabChange(state,action);
        case actionTypes.SIGNUP_SNACKBAR_CLOSE: return closeSnackBar(state,action);
        case actionTypes.LOGIN_START: return loginStart(state,action);
        default:
            return state;
    }
};

export default reducer;
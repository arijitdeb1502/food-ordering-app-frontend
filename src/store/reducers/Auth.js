import * as actionTypes from '../actions/actionTypes';
import {
    signup,
    modalClose,
    tabChange,
    closeSnackBar
} from './SignupReducerMethods';
import {
   loginSuccess,
   loginFail,
   resetLoginState
} from './LoginReducerMethods';
import {
   modalOpen,
   logoutStart,
   setRedirectPath
} from './HeaderReducerMethods';

const initialState = {
    userSignupSuccess: false,
    userLoginSuccess:  false,
    snackbarMessage:'',
    tabIndex: 0,
    showModal:false,
    token: null,
    userFirstName: null,
    error: null,
    // loading: false,
    authRedirectPath: '/'
};



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.HEADER_MODAL_OPEN: return modalOpen(state,action);
        case actionTypes.SIGNUP_SUCCESS: return signup(state, action);
        case actionTypes.SIGNUP_MODAL_CLOSE: return modalClose(state,action);
        case actionTypes.SIGNUP_TAB_CHANGE: return tabChange(state,action);
        case actionTypes.SIGNUP_SNACKBAR_CLOSE: return closeSnackBar(state,action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state,action);
        case actionTypes.LOGIN_FAIL: return loginFail(state,action);
        case actionTypes.LOGOUT_START: return logoutStart(state,action);
        case actionTypes.RESET_LOGIN_STATE: return resetLoginState(state,action); 
        case actionTypes.SET_REDIRECT_PATH: return setRedirectPath(state,action)
        default:
            return state;
    }
};

export default reducer;
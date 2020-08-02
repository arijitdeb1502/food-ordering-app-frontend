import { updateObject } from '../utility';

export const loginStart = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userContactNo: action.contactNo,
        error: null
     } );
};


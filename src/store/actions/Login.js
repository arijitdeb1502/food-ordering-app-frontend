import axios from 'axios';
import * as actionTypes from './actionTypes';


export const loginSuccess = ({
    firstName,
    accessToken
})=>{
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userFirstName: firstName,
        token: accessToken,
        showModal: false,
        userLoginSuccess: true
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const login = (combinedCredentials) => {
    return dispatch => {
        // dispatch(loginSuccess());
        
        axios.defaults.headers['authorization']=combinedCredentials

        axios.post('/api/customer/login').then(response=>{
            console.log(response.data['first_name']);
            console.log(response.headers['access-token']);

            localStorage.setItem('token', response.headers['access-token']);
            localStorage.setItem('first_name', response.data['first_name']);

            dispatch(loginSuccess({
                firstName: response.data['first_name'],
                accessToken: response.headers['access-token']
            }));

        }).catch(error=>{
            console.log({error});
            dispatch(loginFail("Invalid Credentials!!"));
        })
        
    }
};
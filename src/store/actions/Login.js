import axios from 'axios';
import jwt from 'jsonwebtoken';

import * as actionTypes from './actionTypes';



export const loginSuccess = ({
    firstName=localStorage.getItem('first_name'),
    accessToken=localStorage.getItem('token')
})=>{
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userFirstName: firstName,
        token: accessToken,
        showModal: false,
        userLoginSuccess: true
        // authRedirectPath: path
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};


const resetLoginState=()=>{
    return {
        type: actionTypes.RESET_LOGIN_STATE
    }
}

export const checkTokenExpiration = () => {
    
    return dispatch =>{
        const currentDate=Math.floor(Date.now() / 1000);

        if(jwt.decode(localStorage.getItem('token')))
        {

            const expiredAt=jwt.decode(localStorage.getItem('token')).exp;
            const delta=expiredAt-currentDate;
            if(delta<=0){

                localStorage.removeItem('token');
                localStorage.removeItem('first_name');
                dispatch(resetLoginState());
            }else{
                dispatch(loginSuccess(localStorage.getItem('first_name'),localStorage.getItem('token')))
            }
        }else{
            dispatch(resetLoginState());
        }
            
        
        
    }
    
};



export const login = (combinedCredentials) => {
    return dispatch => {        
        axios.defaults.headers['authorization']=combinedCredentials

        axios.post('/api/customer/login').then(response=>{

            localStorage.setItem('token', response.headers['access-token']);
            localStorage.setItem('first_name', response.data['first_name']);

            dispatch(loginSuccess({
                firstName: response.data['first_name'],
                accessToken: response.headers['access-token'],
                path: "/"
            }));
            dispatch(checkTokenExpiration());

        }).catch(error=>{
            console.log(error);
            dispatch(loginFail(error));
        })
        
    }
};

export const setRedirectPath=(path)=>{
    return{
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    }
}
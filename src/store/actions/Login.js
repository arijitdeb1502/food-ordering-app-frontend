import axios from 'axios';
import * as actionTypes from './actionTypes';


export const loginStart = ()=>{
    return {
        type: actionTypes.LOGIN_START,

    }
}

export const login = (combinedCredentials) => {
    return dispatch => {
        dispatch(loginStart());

        // const instance = axios.create({
        //     headers: {
        //       post: {        
        //         authorization: combinedCredentials
        //       }
        //     }
        // })
        
        axios.defaults.headers['authorization']=combinedCredentials

        axios.post('/api/customer/login').then(response=>{
            console.log(response.headers['access-token']);
        }).catch(error=>{
            console.log({error});
        })
        
    //     axios.post(url, authData)
    //         .then(response => {
    //             console.log(response);
    //             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //             localStorage.setItem('token', response.data.idToken);
    //             localStorage.setItem('expirationDate', expirationDate);
    //             localStorage.setItem('userId', response.data.localId);
    //             dispatch(authSuccess(response.data.idToken, response.data.localId));
    //             dispatch(checkAuthTimeout(response.data.expiresIn));
    //         })
    //         .catch(err => {
    //             dispatch(authFail(err.response.data.error));
    //         });
    // };
    }
};
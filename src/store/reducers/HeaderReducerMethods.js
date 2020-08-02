import { updateObject } from '../utility';

export const modalOpen=(state,action)=>{
    return updateObject( state, { tabIndex: 0,userSignupSuccess:false,showModal:true} );
}
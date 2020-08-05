import jwt from 'jsonwebtoken';

export const isTokenValid = (token)=>{
    
    const currentDate=Math.floor(Date.now() / 1000);
    const expiredAt=jwt.decode(localStorage.getItem('token')).exp;
    const delta=expiredAt-currentDate;
    
    return delta<=0?false:true

}
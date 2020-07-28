import validator from 'validator';
import passwordValidator from 'password-validator';

export const isEmailValid=(emailVal)=>{
    return validator.isEmail(emailVal);
}

export const isPasswordValid=(passwordVal)=>{
    const schema = new passwordValidator();
    const regex = /[#@$%&*!^]/g;

    schema
    .is().min(8)
    .has().digits()
    .has().uppercase()
    .has(regex)

    return schema.validate(passwordVal);
}

export const isContactNumberValid=(contactNumberVal)=>{
    const pattern=/^\d{10}$/;
    return pattern.test(contactNumberVal);
}
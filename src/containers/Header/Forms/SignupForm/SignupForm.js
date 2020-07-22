import React,{Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormContainer from '../../../../components/Header/FormContainer/FormContainer';
import FormButton from '../../../../components/Header/Forms/ui/Button/FormButton';

class SignupForm extends Component{
    render(){
        return(
            <FormContainer>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="firstName">First Name:</InputLabel>
                    <Input id="firstName" />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="lastName">Last Name:</InputLabel>
                    <Input id="lastName" />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="email">Email:</InputLabel>
                    <Input id="email" />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <Input id="password" />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="contactNumber">Contact No:</InputLabel>
                    <Input id="contactNumber" />
                </FormControl>
                <FormButton>SIGNUP</FormButton>
            </FormContainer>
        )
    }
}

export default SignupForm;
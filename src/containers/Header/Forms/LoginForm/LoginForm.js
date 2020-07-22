import React,{Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormContainer from '../../../../components/Header/FormContainer/FormContainer';
import FormButton from '../../../../components/Header/Forms/ui/Button/FormButton';

class LoginForm extends Component{
    render(){
        return(
            <FormContainer>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="userName">User name:</InputLabel>
                    <Input id="userName" />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <Input id="password" />
                </FormControl>
                <FormButton>LOGIN</FormButton>
            </FormContainer>
        )
    }
}

export default LoginForm;
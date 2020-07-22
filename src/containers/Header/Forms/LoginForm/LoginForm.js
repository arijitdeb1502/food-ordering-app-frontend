import React,{Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormContainer from '../../../../components/Header/FormContainer/FormContainer';
import FormButton from '../../../../components/Header/Forms/ui/Button/FormButton';
import FormHelperText from '@material-ui/core/FormHelperText';

class LoginForm extends Component{
    
    state={
        userName: '',
        password: '',
        formUserNameIsValid: true,
        formPasswordIsValid: true
    }

    userNameChangeHandler=e=>{
        this.setState({
            userName: e.target.value
        })
    }

    passwordChangeHandler=e=>{
        this.setState({
            password: e.target.value
        })
    }

    formButtonClickHandler=()=>{

        this.state.userName.trim().length
               ===0?this.setState({formUserNameIsValid:false}):
                    this.setState({formUserNameIsValid:true});


        this.state.password.trim().length
               ===0?this.setState({formPasswordIsValid:false}):
                    this.setState({formPasswordIsValid:true});

    }

    render(){
        return(
            <FormContainer>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="userName">User name:</InputLabel>
                    <Input 
                        id="userName"
                        type="text"
                        userName={this.state.userName}
                        onChange={this.userNameChangeHandler} 
                    />
                    {!this.state.formUserNameIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <Input 
                        id="password" 
                        type="password"
                        password={this.state.password}
                        onChange={this.passwordChangeHandler} 
                    />
                    {!this.state.formPasswordIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                </FormControl>
                <FormButton clicked={this.formButtonClickHandler}>LOGIN</FormButton>
            </FormContainer>
        )
    }
}

export default LoginForm;
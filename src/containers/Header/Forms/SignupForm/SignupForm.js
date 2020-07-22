import React,{Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormContainer from '../../../../components/Header/FormContainer/FormContainer';
import FormButton from '../../../../components/Header/Forms/ui/Button/FormButton';

class SignupForm extends Component{

    state={
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        contactNumber:'',
        formFirstNameIsValid: true,
        formLastNameIsValid: true,
        formEmailIsValid: true,
        formPasswordIsValid: true,
        formContactNumberIsValid: true
    }

    firstNameChangeHandler=e=>{
        this.setState({
            firstName: e.target.value
        })
    }

    lastNameChangeHandler=e=>{
        this.setState({
            lastName: e.target.value
        })
    }

    emailChangeHandler=e=>{
        this.setState({
            email: e.target.value
        })
    }

    passwordChangeHandler=e=>{
        this.setState({
            password: e.target.value
        })
    }

    contactNumberChangeHandler=e=>{
        this.setState({
            contactNumber: e.target.value
        })
    }

    formButtonClickHandler=()=>{

        this.state.firstName.trim().length
               ===0?this.setState({formFirstNameIsValid:false}):
                    this.setState({formFirstNameIsValid:true});


        this.state.lastName.trim().length
               ===0?this.setState({formLastNameIsValid:false}):
                    this.setState({formLastNameIsValid:true});

        this.state.email.trim().length
               ===0?this.setState({formEmailIsValid:false}):
                    this.setState({formEmailIsValid:true});

        this.state.password.trim().length
               ===0?this.setState({formPasswordIsValid:false}):
                    this.setState({formPasswordIsValid:true});

        this.state.contactNumber.trim().length
               ===0?this.setState({formContactNumberIsValid:false}):
                    this.setState({formContactNumberIsValid:true});
    }

    render(){
        return(
            <FormContainer>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="firstName">First Name:</InputLabel>
                    <Input 
                        id="firstName"
                        type="text"
                        firstName={this.state.firstName}
                        onChange={this.firstNameChangeHandler}  
                    />
                    {!this.state.formFirstNameIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="lastName">Last Name:</InputLabel>
                    <Input 
                        id="lastName"
                        type="text"
                        firstName={this.state.lastName}
                        onChange={this.lastNameChangeHandler}   
                    />
                    {!this.state.formLastNameIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="email">Email:</InputLabel>
                    <Input 
                        id="email"
                        type="text"
                        firstName={this.state.email}
                        onChange={this.emailChangeHandler} 
                    />
                    {!this.state.formEmailIsValid &&
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
                        firstName={this.state.password}
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
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="contactNumber">Contact No:</InputLabel>
                    <Input id="contactNumber" />
                    {!this.state.formContactNumberIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                </FormControl>
                <FormButton clicked={this.formButtonClickHandler}>SIGNUP</FormButton>
            </FormContainer>
        )
    }
}

export default SignupForm;
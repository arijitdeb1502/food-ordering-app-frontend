import React,{Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import axios from 'axios';

import {
        isEmailValid,
        isPasswordValid,
        isContactNumberValid
       }
from '../utilityMethods';

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
        formEmailIsValid: true,
        formPasswordIsValid: true,
        formContactNumberIsValid: true,
        emailValueIsValid:true,
        passwordValueIsValid:true,
        contactNumberValueIsValid:true,
        duplicateContactNo:false
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


        this.setState({duplicateContactNo:false});
        this.checkAndDisplayEmptyFieldMessage();

        const emailVal=this.state.email;
        isEmailValid(emailVal)?this.setState({emailValueIsValid: true})
                              :this.setState({emailValueIsValid: false});

        const passwordVal=this.state.password;
        isPasswordValid(passwordVal)?this.setState({passwordValueIsValid: true})
                                    :this.setState({passwordValueIsValid: false}); 

        const contactNumberVal=this.state.contactNumber;
        isContactNumberValid(contactNumberVal)?this.setState({contactNumberValueIsValid: true})
                                              :this.setState({contactNumberValueIsValid: false})
        
    
        const validCustomerSignupRequest = this.state.formFirstNameIsValid&&
                                           this.state.formEmailIsValid&&
                                           this.state.formPasswordIsValid&&
                                           this.state.formContactNumberIsValid&&
                                           this.state.emailValueIsValid&&
                                           this.state.passwordValueIsValid&&
                                           this.state.contactNumberValueIsValid;

        if(validCustomerSignupRequest===true){
            
            this.sendCustomerSignup(
                                this.state.firstName,
                                this.state.lastName,
                                this.state.email,
                                this.state.password,
                                this.state.contactNumber
                              );
            }
        
    
    }

    sendCustomerSignup=(
        firstName,
        lastName,
        email,
        password,
        contactNumber
    )=>{

        const custSignupData = {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            password: password,
            contact_number: contactNumber,
        }

        axios.post('/api/customer/signup', custSignupData)
            .then(response => {
                console.log(response);
            }).catch(error=>{
                // const errorObj={...error};
                // console.log(errorObj.response.status+":"+errorObj.response.data.error);
                if(error.includes("This contact number is already registered")){
                    this.setState({duplicateContactNo:true});
                }else{
                    this.setState({duplicateContactNo:false});
                }
                                            
            });
    
    }

    checkAndDisplayEmptyFieldMessage=()=>{
        this.state.firstName.trim().length
        ===0?this.setState({formFirstNameIsValid:false}):
             this.setState({formFirstNameIsValid:true});

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
                        value={this.state.firstName}
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
                        value={this.state.lastName}
                        onChange={this.lastNameChangeHandler}   
                    />
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="email">Email:</InputLabel>
                    <Input 
                        id="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.emailChangeHandler} 
                    />
                    {!this.state.formEmailIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { this.state.formEmailIsValid &&
                      !this.state.emailValueIsValid 
                       &&
                        <FormHelperText
                            error
                        >
                            Invalid Email!
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <Input 
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.passwordChangeHandler} 
                    />
                    {!this.state.formPasswordIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { this.state.formPasswordIsValid&&
                     !this.state.passwordValueIsValid 
                      &&
                        <FormHelperText
                            error
                        >
                            Password must contain at least one capital letter, one 
                            <br/> small letter, one number, and one special character
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl style={{marginBottom: '1rem'}}>
                    <InputLabel htmlFor="contactNumber">Contact No:</InputLabel>
                    <Input 
                        id="contactNumber"
                        type="text"
                        value={this.state.contactNumber}
                        onChange={this.contactNumberChangeHandler} 
                    />
                    {!this.state.formContactNumberIsValid &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { this.state.formContactNumberIsValid &&
                      !this.state.contactNumberValueIsValid 
                       &&
                        <FormHelperText
                            error
                        >
                            Contact Number must consist of numbers<br/> 
                            and must be of 10 digits
                        </FormHelperText>
                    }
                    { this.state.formContactNumberIsValid &&
                      this.state.contactNumberValueIsValid &&
                      this.state.duplicateContactNo 
                       &&
                        <FormHelperText
                            error
                        >
                            This Contact Number is already registered!Try other<br/> 
                            Contact Number
                        </FormHelperText>
                    }
                </FormControl>
                <FormButton clicked={this.formButtonClickHandler}>SIGNUP</FormButton>
            </FormContainer>
        )
    }
}

export default SignupForm;
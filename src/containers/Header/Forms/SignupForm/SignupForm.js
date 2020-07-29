import React,{Component} from 'react';
import {connect} from 'react-redux';


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import {signup} from '../../../../store/actions/Signup';

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
        formFirstNameIsEmpty: false,
        formEmailIsEmpty: false,
        formPasswordIsEmpty: false,
        formContactNumberEmpty: false,
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
        

        const allRequiredFieldsEmpty=this.state.firstName.trim().length===0
                                      ||this.state.email.trim().length===0
                                      ||this.state.password.trim().length===0
                                      ||this.state.contactNumber.trim().length===0

        console.log(allRequiredFieldsEmpty+"Arijit")
        // validCustomerSignupRequest===true?
        //     this.sendCustomerSignup(
        //         this.state.firstName,
        //         this.state.lastName,
        //         this.state.email,
        //         this.state.password,
        //         this.state.contactNumber
        //     ):
        //     this.setState({
        //             firstName:'',
        //             lastName:'',
        //             email:'',
        //             password:'',
        //             contactNumber:''
        //     })
        
    
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
                this.props.onSignup();

            }).catch(error=>{
            
                if(error.includes("This contact number is already registered")){
                    this.setState({duplicateContactNo:true});
                }else{
                    this.setState({duplicateContactNo:false});
                }
                                            
            });
    
    }

    checkAndDisplayEmptyFieldMessage=()=>{
        this.state.firstName.trim().length
        ===0?this.setState({formFirstNameIsEmpty:true}):
             this.setState({formFirstNameIsEmpty:false});

        this.state.email.trim().length
        ===0?this.setState({formEmailIsEmpty:true}):
             this.setState({formEmailIsEmpty:false});
        
        this.state.password.trim().length
        ===0?this.setState({formPasswordIsEmpty:true}):
             this.setState({formPasswordIsEmpty:false});

        this.state.contactNumber.trim().length
        ===0?this.setState({formContactNumberIsEmpty:true}):
             this.setState({formContactNumberIsEmpty:false});

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
                    {this.state.formFirstNameIsEmpty &&
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
                    {this.state.formEmailIsEmpty &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { !this.state.formEmailIsEmpty &&
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
                    {this.state.formPasswordIsEmpty &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { !this.state.formPasswordIsEmpty&&
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
                    {this.state.formContactNumberIsEmpty &&
                        <FormHelperText
                            error
                        >
                            *required
                        </FormHelperText>
                    }
                    { !this.state.formContactNumberIsEmpty &&
                      !this.state.contactNumberValueIsValid 
                       &&
                        <FormHelperText
                            error
                        >
                            Contact Number must consist of numbers<br/> 
                            and must be of 10 digits
                        </FormHelperText>
                    }
                    { !this.state.formContactNumberIsEmpty &&
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

const mapDispatchToProps= dispatch=>{
    return {
        onSignup: ()=>dispatch(signup("Registered Successfully! Please login now!"))
    };
}


export default connect(null,mapDispatchToProps)(SignupForm);
import React,{Component} from 'react';
import Redirect from 'react-router-dom';

import Aux from '../../hoc/Aux';
import ColoredFastFoodIcon from '../../components/Header/ui/icon/FastFoodIcon';
import InputWithIcon from '../../components/Header/ui/Filter/Filter';
import HeaderButton from '../../components/Header/ui/Button/Button';
import HeaderModal from '../../components/Header/Modal/HeaderModal';
import LoginForm from '../Header/Forms/LoginForm/LoginForm';
import SignUpForm from '../Header/Forms/SignupForm/SignupForm';
import HeaderMenuItem from './MenuItem/HeaderMenuItem';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {connect} from 'react-redux';

import {isTokenValid} from './Utility/auth';


import {
         modalClose,
         tabChange
        } 
from '../../store/actions/signup';

import {
    modalOpen,
    logout
}
from '../../store/actions/header';

import {
    loginSuccess,
    setRedirectPath
}
from '../../store/actions/login';

import styles from './Header.module.css';


class Header extends Component{

    modalOpenHandler=()=>{
        this.props.onOpenModal();
    }

    closeModalHandler=()=>{
        this.props.onCloseModal();
    }

    tabChangeHandler=(event,index)=>{
        this.props.onChangeTab(index);
    }

    render(){

        const token=localStorage.getItem('token');        
        
        if(token===null||!isTokenValid(token)){
            this.props.onInvalidToken()
        }else{
            this.props.dispatchLoginSuccess();
            this.props.redirectPathTo();
        }

        console.log(this.props.redirectPath);

        return(
            <Aux>
                <div className={styles.Header}>
                    <ColoredFastFoodIcon />
                    <div className={styles.Search}>
                        <InputWithIcon/>
                    </div>
                    {!this.props.isLoginSuccess &&
                        <div className={styles.Button}>
                            <HeaderButton clicked={this.modalOpenHandler}>Login</HeaderButton>
                        </div>
                    }
                    {
                        this.props.isLoginSuccess &&
                        <div className={styles.HeaderMenu}>
                            <HeaderMenuItem 
                               profileName={this.props.firstName}
                            />
                        </div>
                    }
                </div>
                  <HeaderModal 
                    // modalIsOpen={this.props.showModal}
                    modalIsOpen={this.props.displayModal}
                    closeModal={this.closeModalHandler}
                    modalStyle={styles.Modal}
                  >
                    <Tabs
                        className={styles.Tabs} 
                        value={this.props.tabIndex} 
                        onChange={this.tabChangeHandler}
                    >
                        <Tab label="Login" />
                        <Tab label="Sign Up" />
                    </Tabs>
                    {this.props.tabIndex===0 && <LoginForm />}
                    {this.props.tabIndex===1 && <SignUpForm/>}
                  </HeaderModal>
            </Aux>
        )
    }
}

const mapStateToProps = state=>{
    return{
        tabIndex: state.signup.tabIndex,
        displayModal: state.signup.showModal,
        isLoginSuccess: state.signup.userLoginSuccess,
        firstName: state.signup.userFirstName,
        redirectPath: state.signup.authRedirectPath
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCloseModal:()=>dispatch(modalClose()),
        onOpenModal:()=>dispatch(modalOpen()),
        onChangeTab:(index)=>dispatch(tabChange(index)),
        onInvalidToken:()=>dispatch(logout()),
        dispatchLoginSuccess:()=>dispatch(loginSuccess("","")),
        redirectPathTo:()=>dispatch(setRedirectPath("/home"))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
import React,{Component} from 'react';

import Aux from '../../hoc/Aux';
import ColoredFastFoodIcon from '../../components/Header/ui/icon/FastFoodIcon';
import InputWithIcon from '../../components/Header/ui/Filter/Filter';
import HeaderButton from '../../components/Header/ui/Button/Button';
import HeaderModal from '../../components/Header/Modal/HeaderModal';
import LoginForm from '../Header/Forms/LoginForm/LoginForm';
import SignUpForm from '../Header/Forms/SignupForm/SignupForm';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {connect} from 'react-redux';

import {
         modalClose,
         tabChange
        } 
from '../../store/actions/Auth';

import styles from './Header.module.css';


class Header extends Component{
    state ={
        displayModal: false
    }

    modalOpenHandler=()=>{
        this.setState({displayModal:true})
    }

    closeModalHandler=()=>{
    
        this.setState(
                       {
                         displayModal:false
                       }
                      )
        
        this.props.onCloseModal();
    }

    tabChangeHandler=(event,index)=>{
        // this.setState({tabIndex:index});
        this.props.onChangeTab(index);
    }

    render(){
        console.log(this.props.tabIndex);
        return(
            <Aux>
                <div className={styles.Header}>
                    <ColoredFastFoodIcon />
                    <div className={styles.Search}>
                        <InputWithIcon/>
                    </div>
                    <div className={styles.Button}>
                        <HeaderButton clicked={this.modalOpenHandler}>Login</HeaderButton>
                    </div>
                </div>
                  <HeaderModal 
                    modalIsOpen={this.state.displayModal}
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
        tabIndex: state.signup.tabIndex
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCloseModal:()=>dispatch(modalClose()),
        onChangeTab:(index)=>dispatch(tabChange(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
import React,{Component} from 'react';

import Aux from '../../hoc/Aux';
import ColoredFastFoodIcon from '../../components/Header/ui/icon/FastFoodIcon';
import InputWithIcon from '../../components/Header/ui/Filter/Filter';
import HeaderButton from '../../components/Header/ui/Button/Button';
import HeaderModal from '../../components/Header/Modal/HeaderModal';
import LoginForm from '../Header/Forms/LoginForm/LoginForm';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './Header.module.css';


class Header extends Component{
    state ={
        displayModal: false,
        tabIndex: 0
    }

    modalOpenHandler=()=>{
        this.setState({displayModal:true})
    }

    closeModalHandler=()=>{
        this.setState({displayModal:false})
    }

    tabChangeHandler=(event,index)=>{
        this.setState({tabIndex:index});
    }

    render(){
        
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
                {/* <StylesProvider injectFirst> */}
                  <HeaderModal 
                    modalIsOpen={this.state.displayModal}
                    closeModal={this.closeModalHandler}
                    modalStyle={styles.Modal}
                  >
                    <Tabs
                        className={styles.Tabs} 
                        value={this.state.tabIndex} 
                        onChange={this.tabChangeHandler}
                    >
                        <Tab label="Login" />
                        <Tab label="Sign Up" />
                    </Tabs>
                    <LoginForm></LoginForm>
                  </HeaderModal>
                {/* </StylesProvider> */}
            </Aux>
        )
    }
}

export default Header;
import React,{Component} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import {connect} from 'react-redux';

import {
  logout
} from '../../../store/actions/header';

import {
  setRedirectPath
} from '../../../store/actions/login'


import Aux from '../../../hoc/Aux';

import styles from './HeaderMenuItem.module.css';



class HeaderMenuItem extends Component{

  
  state={
    anchorEl: null,
    openMenu: false
  }

  iconClickHandler=(event)=>{
    this.setState({
      anchorEl: event.currentTarget,
      openMenu: true
    })
  }

  closeMenuHandler=()=>{
    this.setState({  
      anchorEl: null,
      openMenu: false 
    });
  }

  logoutMenuClickHandler=()=>{
    this.props.onLogout();
    this.props.redirectToHome();
  }

  render(){  


    return(
      <Aux>
      
        <div className={styles.Container}>
          <AccountCircleRoundedIcon 
              style={{color:'white'}}
              onClick={this.iconClickHandler} 
          />
          <div 
              className={styles.ProfileName}
          >
              {this.props.profileName}
          </div>
        </div>
        <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={this.state.openMenu}
            onClose={this.closeMenuHandler}
            className={styles.Menu}
        >
          <MenuItem>My Profile</MenuItem>
          <MenuItem onClick={this.logoutMenuClickHandler}>Logout</MenuItem>
          </Menu>
      </Aux>
    )
  }
}

const mapDispatchToProps= dispatch=>{
  return{
    onLogout: ()=> dispatch(logout()),
    redirectToHome: ()=> dispatch(setRedirectPath("/home"))
  }
}

export default connect(null,mapDispatchToProps)(HeaderMenuItem);
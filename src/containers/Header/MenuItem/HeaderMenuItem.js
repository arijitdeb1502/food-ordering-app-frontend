import React,{Component} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  logout
} from '../../../store/actions/header';

import {
  checkTokenExpiration,
  setRedirectPath
} from '../../../store/actions/login'


import Aux from '../../../hoc/Aux';

import styles from './HeaderMenuItem.module.css';


class HeaderMenuItem extends Component{

  componentDidMount(){
    this.props.onComponentMount()
  }

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
    this.props.onLogoutMenuClick();

    this.setState({
      openMenu:false
    });

  }

  profileMenuClickHandler=()=>{
      this.setState({
        openMenu: false
      });

      this.props.onProfileMenuClick();
  }

  render(){  

    return(
      <Aux>
        {/* {this.state.currentPage}      */}
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
          <MenuItem onClick={this.profileMenuClickHandler}>
            <NavLink to='/profile' style={{textDecoration:'none',color:'black'}}>My Profile</NavLink>
          </MenuItem>
          <MenuItem onClick={this.logoutMenuClickHandler}>
            <NavLink to='/' style={{textDecoration:'none',color:'black'}}>Logout</NavLink>
          </MenuItem>
        </Menu>
      </Aux>
    )
  }
}

const mapStateToProps= state=>{
  return{
    profileName: state.signup.userFirstName,
    currentPage: state.signup.authRedirectPath
  }
}

const mapDispatchToProps= dispatch=>{
  return{
    onLogout: ()=> dispatch(logout()),
    onComponentMount: ()=> dispatch(checkTokenExpiration()),
    // redirectToHome: ()=> dispatch(setRedirectPath("/home"))
    onProfileMenuClick: ()=> dispatch(setRedirectPath("/profile")),
    onLogoutMenuClick: ()=> dispatch(setRedirectPath("/"))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMenuItem);
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import styles from './HeaderMenuItem.module.css';

const HeaderMenuItem=(props)=>(
    <div className={styles.Container}>
      <AccountCircleRoundedIcon 
            style={{color:'white',marginRight:'.2rem'}}
       />
       <div className={styles.ProfileName}>
        {props.profileName}
       </div>
        <Menu>
          <MenuItem>Item1</MenuItem>
          <MenuItem>Item1</MenuItem>
        </Menu>
    </div>
)

export default HeaderMenuItem;
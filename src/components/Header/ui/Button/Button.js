import React from 'react';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from './Button.module.css';

const HeaderButton = props=>(
    <Button
        variant="contained"
        className={styles.Button}
        startIcon={<AccountCircleIcon />}
      >
        {props.children}
      </Button>
)

export default HeaderButton;
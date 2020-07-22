import React from 'react';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { StylesProvider } from '@material-ui/core/styles';
import styles from './Button.module.css';

const HeaderButton = props=>(
  <StylesProvider injectFirst>
    <Button
        className={styles.Button}
        onClick={props.clicked}
        startIcon={<AccountCircleIcon />}
      >
        {props.children}
      </Button>
    </StylesProvider>
)

export default HeaderButton;
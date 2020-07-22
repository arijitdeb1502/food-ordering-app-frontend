import React from 'react';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HeaderButton = props=>(
    <Button
        className={styles.Button}
        style={{backgroundColor: 'white'}}
        onClick={props.clicked}
        startIcon={<AccountCircleIcon />}
      >
        {props.children}
      </Button>
)

export default HeaderButton;
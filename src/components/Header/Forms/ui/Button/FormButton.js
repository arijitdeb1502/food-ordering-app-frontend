import React from 'react';
import Button from '@material-ui/core/Button';

const FormButton = props=>(
    <Button 
        variant="contained"
        color="primary"
        onClick={props.clicked}
        style={{width: '25%',alignSelf:'center'}}
    >
        {props.children}
    </Button>
)

export default FormButton;
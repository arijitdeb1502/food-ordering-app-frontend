import React from 'react';
import Typography from '@material-ui/core/Typography';

const FormContainer = props =>(
    <Typography 
       component='div'
       style={{ 
                 padding: 0,
                 display: 'flex',
                 flexDirection: 'column'
                }}
    >
      {props.children}
    </Typography>
)

export default FormContainer;
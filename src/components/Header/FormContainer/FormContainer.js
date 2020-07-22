import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormContainer;
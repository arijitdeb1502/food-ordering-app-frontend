import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Aux from '../../../hoc/Aux';

const Alert=props=>{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar=props=>(
    <Aux>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
      <Snackbar open autoHideDuration={6000}>
        {/* <Alert onClose={handleClose} severity="success"> */}
        <Alert severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Aux>
)

export default SnackBar;
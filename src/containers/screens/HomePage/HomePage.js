import React,{Component} from 'react';
import {connect} from 'react-redux';

import {closeSnackBar} from '../../../store/actions/Signup';

import Aux from '../../../hoc/Aux';
import Snackbar from '@material-ui/core/Snackbar';

import styles from './HomePage.module.css';

class HomePage extends Component{

    closeSnackbarHandler=()=>{
        console.log("Inside closeSnack Bar Handler");
        this.props.onCloseSnackbar();
    }

    render(){
        return(
            <Aux>
                HomePage
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.showSnackBar}
                    autoHideDuration={6000}
                    onClose={this.closeSnackbarHandler}
                    message={this.props.displaySignupSuccessMsg}
                />
            </Aux>
        )
    }
}

const mapStateToProps= state=>{
    return {
        showSnackBar: state.signup.userSignupSuccess,
        displaySignupSuccessMsg: state.signup.snackbarMessage
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onCloseSnackbar: ()=>dispatch(closeSnackBar())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
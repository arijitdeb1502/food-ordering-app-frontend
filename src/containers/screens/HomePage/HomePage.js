import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import SnackBar from '../../../components/HomePage/SnackBar/SnackBar';

import styles from './HomePage.module.css';

class HomePage extends Component{
    
    state={
        showSnackBar: true
    }

    render(){
        return(
            <Aux>
                HomePage
                <SnackBar
                   show={this.state.showSnackBar}
                >
                   User successfully logged in 
                </SnackBar>
            </Aux>
        )
    }
}

export default HomePage;
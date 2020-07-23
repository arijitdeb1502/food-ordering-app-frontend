import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import SnackBar from '../../../components/HomePage/SnackBar/SnackBar';

import styles from './HomePage.module.css';

class HomePage extends Component{
    
    state={
        showSnackBar: false
    }

    render(){
        return(
            <Aux>
                HomePage
                <SnackBar>
                    
                </SnackBar>
            </Aux>
        )
    }
}

export default HomePage;
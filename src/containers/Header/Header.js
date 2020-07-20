import React,{Component} from 'react';
import ColoredFastFoodIcon from '../../components/Header/ui/icon/FastFoodIcon';
import InputWithIcon from '../../components/Header/ui/Filter/Filter';
import HeaderButton from '../../components/Header/ui/Button/Button'

import styles from './Header.module.css';

class Header extends Component{
    render(){
        return(
            <div className={styles.Header}>
                <ColoredFastFoodIcon />
                <div className={styles.Search}>
                    <InputWithIcon/>
                </div>
                <div className={styles.Button}>
                    <HeaderButton>Login</HeaderButton>
                </div>
            </div>
        )
    }
}

export default Header;
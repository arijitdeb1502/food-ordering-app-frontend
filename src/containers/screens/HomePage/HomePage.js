import React,{Component} from 'react';
import {connect} from 'react-redux';

import {closeSnackBar} from '../../../store/actions/signup';

import Aux from '../../../hoc/Aux';
import Snackbar from '@material-ui/core/Snackbar';

import Restaurant from './Restaurant/Restaurant';
import {Restaurants} from '../../../backend/GetAllRestaurants';

import styles from './HomePage.module.css';

import { checkTokenExpiration } from '../../../store/actions/login';

class HomePage extends Component{

    componentDidMount(){
           this.props.onComponentMount();
    }

    closeSnackbarHandler=()=>{
        this.props.onCloseSnackbar();
    }

    render(){
        return(
            <Aux>
                <div 
                    className={styles.Container}
                >
                {Restaurants.map((restaurant)=>{
                    return (
                        <div key={restaurant.id}>
                            <Restaurant
                                restaurant_photo_URL={restaurant.photo_URL}
                                restaurant_restaurant_name={restaurant.restaurant_name}
                                restaurant_categories={restaurant.categories}
                                restaurant_customer_rating={restaurant.customer_rating}
                                restaurant_number_customers_rated={restaurant.number_customers_rated}
                                restaurant_average_price={restaurant.average_price}
                            />
                        </div>
                    )
                })}
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.showSnackBar}
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
        displaySignupSuccessMsg: state.signup.snackbarMessage,
        redirectPath: state.signup.authRedirectPath
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onCloseSnackbar: ()=>dispatch(closeSnackBar()),
        onComponentMount: ()=>dispatch(checkTokenExpiration())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';


import axios from 'axios';


import {closeSnackBar} from '../../../store/actions/signup';

import Aux from '../../../hoc/Aux';


import Restaurant from './Restaurant/Restaurant';

import styles from './HomePage.module.css';

import { checkTokenExpiration } from '../../../store/actions/login';



class HomePage extends Component{

    state = {
        restaurants : []
    };

    componentDidMount(){
           axios.get("/api/restaurant")
            .then((data)=>{
                console.log(data.data.restaurants)
                this.setState(()=>{
                    return {
                        restaurants: data.data.restaurants
                    }
                })  
            }).catch((error)=>{
                console.log(error)    
            })
        
           this.props.onComponentMount();
    }

    closeSnackbarHandler=()=>{
        this.props.onCloseSnackbar();
    }

    render(){


        const toBeLoaded=this.state.restaurants.length===0?
                <div style={{marginTop: '22%' , marginLeft: '45%'}}><CircularProgress /></div>
                :
                (
                <Aux>
                <div 
                    className={styles.Container}
                >
                {this.state.restaurants.filter(
                        restaurant=>restaurant.restaurant_name.toLowerCase().includes(this.props.filterVal.toLowerCase())
                    ).map((restaurant)=>{
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
        return toBeLoaded
    }
}

const mapStateToProps= state=>{
    return {
        showSnackBar: state.signup.userSignupSuccess,
        displaySignupSuccessMsg: state.signup.snackbarMessage,
        redirectPath: state.signup.authRedirectPath,
        filterVal:  state.filter.filterTxt
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onCloseSnackbar: ()=>dispatch(closeSnackBar()),
        onComponentMount: ()=>dispatch(checkTokenExpiration())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
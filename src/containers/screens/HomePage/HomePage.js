import React,{Component} from 'react';
import {connect} from 'react-redux';

import {closeSnackBar} from '../../../store/actions/signup';

import Aux from '../../../hoc/Aux';
import Snackbar from '@material-ui/core/Snackbar';
// import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';



import {Restaurants} from '../../../backend/GetAllRestaurants';

import styles from './HomePage.module.css';

class HomePage extends Component{

    componentDidMount(){
        // Restaurants.map((restaurant)=>{
               
        // })
    }

    closeSnackbarHandler=()=>{
        this.props.onCloseSnackbar();
    }

    render(){
        return(
            <Aux>
                <div 
                    // cellHeight={140} 
                    // cols={4} 
                    className={styles.Container}
                >
                {Restaurants.map((restaurant)=>{
                        return (
                            <div key={restaurant.id}>
                            <Card>
                                <CardMedia
                                    component="jpg" 
                                    image={restaurant.photo_URL}
                                    className={styles.CardMedia}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {restaurant.restaurant_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                         {restaurant.categories}  
                                    </Typography>
                                    <Box display="flex" flexDirection="row">
                                        <Box flexGrow={1} bgcolor="grey.300">
                                            <StarIcon></StarIcon>
                                            {restaurant.customer_rating}
                                            ({restaurant.number_customers_rated})
                                        </Box>
                                        <Box>
                                            Price Item
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
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
        displaySignupSuccessMsg: state.signup.snackbarMessage
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onCloseSnackbar: ()=>dispatch(closeSnackBar())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
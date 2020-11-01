import React,{Component} from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';

import styles from './Restaurant.module.css';

class Restaurant extends Component{

    render(){
        return(
            <Card>
                <CardMedia
                    // component="JPG" 
                    image={this.props.restaurant_photo_URL}
                    className={styles.CardMedia}
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h3"
                        style={{height:'4rem'}}
                    >   
                        {this.props.restaurant_restaurant_name}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary"
                        component="span" 
                    >
                        <Box style={{height:'3.5rem',width:'100%'}}>
                            {this.props.restaurant_categories}
                        </Box>
                        <Box className={styles.Rating}>
                            <Box 
                                        style={{ 
                                        fontSize: '.75rem',
                                        backgroundColor:'rgb(206, 206, 40)',
                                        paddingRight: '.5rem'
                                    }}>
                                <StarIcon style={{height:'.75rem'}}></StarIcon>
                                {this.props.restaurant_customer_rating}
                                ({this.props.restaurant_number_customers_rated})
                            </Box>
                            <Box>
                                {this.props.restaurant_average_price} for 2
                            </Box>
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
};

export default Restaurant;
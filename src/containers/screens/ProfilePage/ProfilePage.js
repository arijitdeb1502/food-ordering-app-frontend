import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { checkTokenExpiration } from '../../../store/actions/login';



class ProfilePage extends Component{
    state={
        currentPage: "/profile"
    }
    componentDidMount(){
        this.props.onComponentMount();
        
        if(!localStorage.getItem('token')){
            this.setState({currentPage:"/"})
        }
    }

    render(){
    
        return(
            <div>
                {<Redirect to={this.state.currentPage}></Redirect>}
                This is the profile Page
            </div>
        )
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        onComponentMount: ()=>dispatch(checkTokenExpiration())
    };
};

export default connect(null,mapDispatchToProps)(ProfilePage);
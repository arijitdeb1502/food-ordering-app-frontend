import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import {filterStrChange} from '../../../store/actions/filter';
// import styles from './Filter.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const InputWithIcon=(props)=> {

  const changeHandler=(event)=>{
      console.log(event.target.value);
      props.onInputChange(event.target.value);
  }

  const classes = useStyles();

  return (
  <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={changeHandler}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  );
}

const mapDipatchToProps = dispatch=>{
  return{
      onInputChange:(filterStr)=>dispatch(filterStrChange(filterStr))
  }
}

export default connect(null,mapDipatchToProps)(InputWithIcon);
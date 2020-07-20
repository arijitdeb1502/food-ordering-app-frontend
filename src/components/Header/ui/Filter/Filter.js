import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import styles from './Filter.module.css';


const InputWithIcon=()=> {

  return (
    <div>
      <TextField
        placeholder="Search By Restaurant Name"
        className={styles.TextField}
        InputProps={{
          startAdornment: (
            <InputAdornment 
                position="start"
                className={styles.InputAdornment}
            >
              <SearchIcon/>
            </InputAdornment>
          )
        }
    }
      />
      
    </div>
  );
}

export default InputWithIcon;
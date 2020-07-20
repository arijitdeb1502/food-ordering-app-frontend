import React,{Component} from 'react';
import Header from './containers/Header/Header';

import Aux from './hoc/Aux';

class App extends Component{
  render(){

    return(
      <Aux>
        <Header></Header>
      </Aux>
    )
      
  }
}

export default App;

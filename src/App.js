import React, { Component, Fragment } from 'react';

import SideBar from './component/SideBar';
import Main from './component/Main';

import { SOCIAL_ICONS } from './data/Social';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      icons:SOCIAL_ICONS,
    }
  }


render(){
 
  return (
    <Fragment>
     <SideBar icons={this.state.icons} />
      <Main />
    </Fragment>
     
    );
  

} 
}

export default App;

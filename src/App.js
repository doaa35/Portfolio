import React, { Component } from 'react';

import SideBar from './component/SideBar';

import { SOCIAL_ICONS } from './data/Social';
import { IMG } from './data/Images';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      icons:SOCIAL_ICONS,
      images:IMG
    }
  }


render(){
 
  return (
    <div>
      <SideBar icons={this.state.icons} images={this.state.images} />
    </div>
     
    );
  

} 
}

export default App;

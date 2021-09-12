import React, { Component } from 'react';

import SideBar from './component/SideBar';
import Main from './component/Main';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';


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
 

  // const items = [
  //   <SidebarItem>Dashboard</SidebarItem>,
  //   <SidebarItem>Profile</SidebarItem>,
  //   <SidebarItem>Settings</SidebarItem>,
  // ];

  return (
    <div>
      <SideBar icons={this.state.icons} />
      <Main />
{/* <Sidebar content={items}>
  </Sidebar> */}

    </div>
     
    );
  

} 
}

export default App;

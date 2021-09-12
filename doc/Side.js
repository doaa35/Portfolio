import React from 'react';
import { render } from 'react-dom';
import YourAppContent from 'path/to/your/app/content'
 
const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];
 
render (
  <Sidebar content={items}>
    <YourAppContent />
  </Sidebar>)
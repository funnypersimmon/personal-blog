import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuIcons from 'components/MenuIcons'

class AppNavigateBar extends Component{      
  render() {
    return (
      <div>
      <AppBar title="Personal blog"/>
        <MenuIcons/>
      </div>
    );
  }
}

export default AppNavigateBar;
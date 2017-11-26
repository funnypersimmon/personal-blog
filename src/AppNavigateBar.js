import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class AppNavigateBar extends Component{      
  render() {
    return (
      <div>
      <AppBar
          title="Test"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}

export default AppNavigateBar;
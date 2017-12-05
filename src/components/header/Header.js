import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends PureComponent {

  render() {
    const { onMenuToggle } = this.props;

   return (
     <div> 
       <AppBar
        title="Personal blog"
        onLeftIconButtonTouchTap={onMenuToggle}>
        </AppBar>
     </div>
   );
 }
}

export default Header;
import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import ButtonAdd from 'components/ButtonAdd';

class Header extends PureComponent {

  render() {
    const { onMenuToggle } = this.props;

   return (
     <div> 
       <AppBar
        title="Personal blog"
        onLeftIconButtonTouchTap={onMenuToggle}>
        <ButtonAdd/>

        </AppBar>
     </div>
   );
 }
}

export default Header;
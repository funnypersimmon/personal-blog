import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

class PersonalBlogDrawer extends PureComponent{

  constructor(props){
    super(props);
    this.state = {
      open:false,
      onMenuToggle:false
    };
  }
    
    render() {
        return (
          <div>
            <Drawer ref="Drawer"
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onMenuToggle}> 
                <Menu>
                    <MenuItem primaryText="Homepage"  containerElement={<Link to="/" />}></MenuItem>
                    <MenuItem primaryText="Lifestyle" containerElement={<Link to="/lifestyle" />}></MenuItem>
                    <MenuItem primaryText="Travel"  containerElement={<Link to="/travel" />}></MenuItem>
                    <MenuItem primaryText="Interests" containerElement={<Link to="/interests" />}></MenuItem>
                    <MenuItem primaryText="About me"  containerElement={<Link to="/aboutme" />}></MenuItem>
                    <Divider/>
                    <MenuItem primaryText="Contact me" containerElement={<Link to="/contactme" />}></MenuItem>
                </Menu>
            </Drawer>
          </div>
        );
      } 
  }

  export default PersonalBlogDrawer;
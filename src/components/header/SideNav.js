import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom'

class SideNav extends Component{

    constructor(props) {
        super(props);
        this.state = {open: false};
      }

    handleToggle=()=> this.setState({open: !this.state.open});
    
    handleClose=()=> this.setState({open: false});
   
    render() {
        return (
          <div>
          <AppBar
              title="Personal blog"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer ref="Drawer"
                docked={false}
                open={this.state.open} 
                onRequestChange={(open)=>this.setState({open})}>
                <Menu>
                    <MenuItem primaryText="Homepage" containerElement={<Link to="/" />}></MenuItem>
                    <MenuItem primaryText="Lifestyle" containerElement={<Link to="/lifestyle" />}></MenuItem>
                    <MenuItem primaryText="Travel" containerElement={<Link to="/travel" />}></MenuItem>
                    <MenuItem primaryText="Interests" containerElement={<Link to="/interests" />}></MenuItem>
                    <MenuItem primaryText="About me" containerElement={<Link to="/aboutme" />}></MenuItem>
                    <Divider/>
                    <MenuItem primaryText="Contact me" containerElement={<Link to="/contactme" />}></MenuItem>
                </Menu>
            </Drawer>
          </div>
        );
      } 
  }

  export default SideNav;
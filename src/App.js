import React, { Component } from 'react';
import 'styles/App.css';
import Header from 'components/header/Header.js';
import Main from 'components/main/Main.js';
import PersonalBlogDrawer from 'components/PersonalBlogDrawer.js';
import Post from 'components/post/Post.js';



const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
  </div>
)

const AboutMe = () => (
  <div>About me
  </div>
)

//Stub
const EmptyPage = () => (
  <div className="content-center">
    <Post/>
  </div>
)

class App extends Component {
  state = {
    menuOpen: false
  };

  handleMenuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <div className="App"> 
          <Header onMenuToggle={this.handleMenuToggle}/>
          <PersonalBlogDrawer open={this.state.menuOpen} onMenuToggle={this.handleMenuToggle}/>
          <Main/>
      </div>

    );
  }
}

export default App;
export {
  Home, EmptyPage, AboutMe
}

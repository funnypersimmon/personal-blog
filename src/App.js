import React, { Component } from 'react';
import 'styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from 'components/header/Header.js';
import Main from 'components/main/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <MuiThemeProvider >
        <div>
          <Header/>
          <Main />
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

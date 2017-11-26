import React, { Component } from 'react';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppNavigateBar from './AppNavigateBar';
import GridListExampleSingleLine from './HorizontalGridList';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <MuiThemeProvider >
        <div>
        <AppNavigateBar/>
        <div>{GridListExampleSingleLine()}</div>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App, { Home, EmptyPage, AboutMe} from 'App';
import ContactMe from 'containers/ContactMe';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

function getStore(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
};

let store = createStore(getStore);

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider> 
    <BrowserRouter>    
      <div>
        <App/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/lifestyle' component={EmptyPage}/>
            <Route path='/travel' component={EmptyPage}/>
            <Route path='/interests' component={EmptyPage}/>
            <Route path='/contactme' component={ContactMe}/>
            <Route path='/aboutme' component={AboutMe}/>
          </Switch> 
        </div>
      </BrowserRouter>
  </MuiThemeProvider>
</Provider>,
document.getElementById('root')
);

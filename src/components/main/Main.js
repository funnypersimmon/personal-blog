import React, { Component } from 'react';
import GridListExampleSingleLine from './HorizontalGridList';
import { Switch, Route } from 'react-router-dom';
import ContactMe from 'containers/ContactMe';

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
  <div>
  </div>
)

class Main extends Component {
  render() {
    return (

      <main>
        <div>{GridListExampleSingleLine()}</div>  

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/lifestyle' component={EmptyPage}/>
          <Route path='/travel' component={EmptyPage}/>
          <Route path='/interests' component={EmptyPage}/>
          <Route path='/contactme' component={ContactMe}/>
          <Route path='/aboutme' component={AboutMe}/>
        </Switch>  
    </main> 
    )
  }
}

export default Main;

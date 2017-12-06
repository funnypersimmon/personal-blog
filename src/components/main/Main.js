import React, { PureComponent } from 'react';
import 'styles/App.css';

class Main extends PureComponent {
  render() {
    return (
      <main>
          <div>
            {this.props.children}
          </div>
    </main> 
    )
  }
}

export default Main;

import React, { PureComponent } from 'react';
import GridListExampleSingleLine from 'HorizontalGridList';
import 'styles/App.css';

class Main extends PureComponent {
  render() {
    return (
      <main>
        <GridListExampleSingleLine/>
          <div>
            {this.props.children}
          </div>
    </main> 
    )
  }
}

export default Main;

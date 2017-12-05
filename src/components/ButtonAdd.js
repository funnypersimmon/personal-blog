import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const ButtonAdd = () => (
  <div className="App-add-button">
    <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default ButtonAdd;
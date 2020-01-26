import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
// import FormWithParent from './components/FormWithParent'
import ParentComponent from './components/ParentComponent'

ReactDOM.render(
  <div>
    <Form />
    <ParentComponent />
  </div>,
  document.getElementById('root')
);
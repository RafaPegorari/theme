import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './App'
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
});

export default reactLifecycles;

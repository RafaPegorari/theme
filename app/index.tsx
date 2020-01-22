import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './RootComponent'
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
});

export default reactLifecycles;

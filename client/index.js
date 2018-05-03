/*
This is the JS that runs on the browser
It imports our APP and places it on the page

render() in this context is equivalent to ReactDOM.render()

render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);
*/

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

function renderApp() {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) module.hot.accept('./app', () => renderApp());

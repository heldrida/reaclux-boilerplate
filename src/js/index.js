import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/root';

render(
  <AppContainer
    component={ Root }
  />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    render(
      <AppContainer
        component={require('./containers/root').default}
      />,
      document.getElementById('app')
    );
  });
}
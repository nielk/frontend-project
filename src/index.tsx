import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

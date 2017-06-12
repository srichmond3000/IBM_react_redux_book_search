import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import { store } from '../store/store';
import { setTopic, setDisplayMode } from '../actions/actions';

store.dispatch(setTopic('javascript'));
store.dispatch(setDisplayMode('THUMBNAIL'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

function showState() {
  const state = store.getState();
  /* eslint-disable */
  debugger
  /* eslint-enable */
}

store.subscribe(showState);
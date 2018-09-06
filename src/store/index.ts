import { applyMiddleware, createStore, Store } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import defaultState, { State } from './state';

if ((module as any).hot) {
  (module as any).hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export const create = (state: Partial<State> = {}): Store<State> => {
  const s = createStore(rootReducer, state, composeWithDevTools(applyMiddleware(thunk)));
  return s;
};

const store = create(defaultState);

export { State } from './state';
export { default as Actions } from './actions';

/**
 * Applications Redux store
 */
export default store;

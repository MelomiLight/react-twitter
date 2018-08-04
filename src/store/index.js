import { createStore, applyMiddleware } from 'redux';
import enhance from './enhance';
import middlewares from './middlewares';
import rootReducer from '../modules';

export default function configureStore(initialState = {}) {
  const enhancers = enhance(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept('../modules', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

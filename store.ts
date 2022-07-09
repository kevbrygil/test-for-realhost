import { createWrapper, MakeStore } from 'next-redux-wrapper';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import rootSaga from './saga';
import { AppState } from './interfaces';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares =
    process.env.NODE_ENV !== 'production' ? [sagaMiddleware, logger] : [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});

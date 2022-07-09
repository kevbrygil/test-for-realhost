import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import {
  failure,
  loadDataSuccess,
  tickClock,
  loadCatDataSuccess,
  loadCatData,
  catFailure,
} from './actions';
import { User, actionTypes, Cat } from './interfaces';

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadDataSagaCatAsync() {
  try {
    yield put(loadCatData());
    const { status, data }: AxiosResponse<Cat[]> = yield call(
      axios.get,
      'https://api.thecatapi.com/v1/images/search?format=json',
    );

    if (status === 200) {
      yield put(loadCatDataSuccess(data));
    }
  } catch (err) {
    yield put(catFailure(err));
  }
}

function* watchCatData() {
  yield takeEvery(actionTypes.WATCH_CAT_DATA, loadDataSagaCatAsync);
}

function* rootSaga(): Generator {
  yield all([call(runClockSaga), takeLatest(actionTypes.LOAD_DATA, loadDataSaga), watchCatData()]);
}

export default rootSaga;

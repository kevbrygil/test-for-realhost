import { User, actionTypes, Cat } from '../interfaces';
import * as actionIs from '../interfaces/actions.interfaces';

export function failure(error: Error | unknown): actionIs.Failure {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function increment(): actionIs.Increment {
  return { type: actionTypes.INCREMENT };
}

export function decrement(): actionIs.Decrement {
  return { type: actionTypes.DECREMENT };
}

export function reset(): actionIs.Reset {
  return { type: actionTypes.RESET };
}

export function loadData(): actionIs.LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): actionIs.LoadDataSuccess {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): actionIs.StartClock {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer: boolean): actionIs.TickClock {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}

export function loadCatData(): actionIs.LoadCatData {
  return { type: actionTypes.LOAD_CAT_DATA, loading: true };
}

export function watchCatData(): actionIs.WatchCatData {
  return { type: actionTypes.WATCH_CAT_DATA, loading: true };
}

export function catFailure(error: Error | unknown): actionIs.CatFailure {
  return {
    type: actionTypes.CAT_FAILURE,
    error,
    loading: false,
  };
}

export function loadCatDataSuccess(data: Cat[]): actionIs.LoadCatDataSuccess {
  return {
    type: actionTypes.LOAD_CAT_DATA_SUCCESS,
    data,
    loading: false,
  };
}

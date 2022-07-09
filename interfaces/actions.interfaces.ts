import { User, Cat } from './index';

export enum actionTypes {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_CAT_DATA = 'LOAD_CAT_DATA',
  LOAD_CAT_DATA_SUCCESS = 'LOAD_CAT_DATA_SUCCESS',
  CAT_FAILURE = 'CAT_FAILURE',
  WATCH_CAT_DATA = 'WATCH_CAT_DATA',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',
}

export type Action =
  | Failure
  | Increment
  | Decrement
  | Reset
  | LoadData
  | LoadDataSuccess
  | StartClock
  | TickClock
  | LoadCatData
  | LoadCatDataSuccess
  | CatFailure
  | WatchCatData;

export interface Failure {
  type: actionTypes.FAILURE;
  error: Error | unknown;
}

export interface Increment {
  type: actionTypes.INCREMENT;
}

export interface Decrement {
  type: actionTypes.DECREMENT;
}

export interface Reset {
  type: actionTypes.RESET;
}

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS;
  data: User[];
}

export interface StartClock {
  type: actionTypes.START_CLOCK;
}

export interface TickClock {
  type: actionTypes.TICK_CLOCK;
  light: boolean;
  ts: number;
}

export interface LoadCatData {
  type: actionTypes.LOAD_CAT_DATA;
  loading: boolean;
}

export interface LoadCatDataSuccess {
  type: actionTypes.LOAD_CAT_DATA_SUCCESS;
  data: Cat[];
  loading: boolean;
}

export interface CatFailure {
  type: actionTypes.CAT_FAILURE;
  error: Error | unknown;
  loading: boolean;
}

export interface WatchCatData {
  type: actionTypes.WATCH_CAT_DATA;
  loading: boolean;
}

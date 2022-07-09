import { AppState, Action, actionTypes } from './interfaces';
import { HYDRATE } from 'next-redux-wrapper';

export const exampleInitialState: AppState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  errorCat: null,
  thecatapiData: null,
  loading: false,
};

const reducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: action.light },
      };

    case actionTypes.LOAD_CAT_DATA:
      return {
        ...state,
        ...{ loading: action.loading },
      };

    case actionTypes.LOAD_CAT_DATA_SUCCESS:
      return {
        ...state,
        ...{ thecatapiData: action.data, loading: action.loading },
      };

    case actionTypes.CAT_FAILURE:
      return {
        ...state,
        ...{ error: action.error, loading: action.loading },
      };

    default:
      return state;
  }
};

export default reducer;

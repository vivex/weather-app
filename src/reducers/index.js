import {FETCH_WEATHER_REPORT_SUCCESS, FETCH_WEATHER_REPORT_STARTED, FETCH_WEATHER_REPORT_FAILED} from '../constants'

const initialState = {
  report: null,
  isLoading: false,
}

export const weather = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_WEATHER_REPORT_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_WEATHER_REPORT_SUCCESS:
      return {
        ...state,
        report: payload,
        isLoading: false,
      };
    default:
      return state
  }
}

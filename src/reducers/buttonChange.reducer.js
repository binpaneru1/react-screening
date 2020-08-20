import {buttonChangeConstants} from '../constants/buttonChange.constants';

const initialState = {
  buttonColors: '',
  loading: true,
  error: ""
}

export function buttonChange(state = initialState, action) {
  switch (action.type) {
    case buttonChangeConstants.STORE_BUTTON_COLOR_REQUEST:
      return {
        ...state,
        loading: false,
        buttonColors: action.data
      }
    default:
      return state
  }
}

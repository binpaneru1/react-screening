import { buttonChangeConstants } from '../constants/buttonChange.constants'

export const randomColorActions = {
  storeButtonColors
}

function storeButtonColors(colors) {
  return dispatch => {
    dispatch(request(colors));
  }

  function request(colors) {
    return {
      type: buttonChangeConstants.STORE_BUTTON_COLOR_REQUEST,
      data: colors
    }
  }
}

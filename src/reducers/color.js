import {
  SET_DOMINANT_COLOR,
  GET_DOMINANT_COLOR,
} from '../actions/color'

export const initialState = {
  isFetching: false,
  hex: {
    colorMutedRegular: '',
    colorMutedLight: '',
    colorMutedDark: '',
    colorRegular: '',
    colorLight: '',
    colorDark: '',
  },
  rgb: {
    colorMutedRegular: '',
    colorMutedLight: '',
    colorMutedDark: '',
    colorRegular: '',
    colorLight: '',
    colorDark: '',
  }
}

function colorReducer (state = initialState, action) {
  switch (action.type) {
    case GET_DOMINANT_COLOR:
      return {
        ...state,
        isFetching: true,
      }
    case SET_DOMINANT_COLOR:
      return {
        ...state,
        isFetching: false,
        hex: action.payload.hex,
        rgb: action.payload.rgb,
      }
    default:
      return state
  }
}

export { colorReducer }

import {
  SET_DOMINANT_COLOR,
} from '../actions/color'

const defaultState = {
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

function colorReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_DOMINANT_COLOR:
      return {
        ...state,
        hex: action.payload.hex,
        rgb: action.payload.rgb,
      }
    default:
      return state
  }
}

export { colorReducer }

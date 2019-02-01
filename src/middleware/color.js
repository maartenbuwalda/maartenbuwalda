import {
  GET_DOMINANT_COLOR,
  SET_DOMINANT_COLOR,
} from '../actions/color'

import Vibrant from 'node-vibrant'

const color = store => next => action => {
  next(action)
  const dispatch = store.dispatch

  if (action.type === GET_DOMINANT_COLOR) {
    const img = new Vibrant(action.payload.image)
    img.getPalette((err, palette) => {
      if (!err) {
        dispatch({
          type: SET_DOMINANT_COLOR,
          payload: {
            hex: {
              colorMutedDark: palette.DarkMuted && palette.DarkMuted.getHex(),
              colorMutedLight: palette.LightMuted && palette.LightMuted.getHex(),
              colorMutedRegular: palette.Muted && palette.Muted.getHex(),
              colorDark: palette.DarkVibrant && palette.DarkVibrant.getHex(),
              colorLight: palette.LightVibrant && palette.LightVibrant.getHex(),
              colorRegular: palette.Vibrant && palette.Vibrant.getHex(),
            },
            rgb: {
              colorMutedDark: palette.DarkMuted && palette.DarkMuted.getRgb().toString(),
              colorMutedLight: palette.LightMuted && palette.LightMuted.getRgb().toString(),
              colorMutedRegular: palette.Muted && palette.Muted.getRgb().toString(),
              colorDark: palette.DarkVibrant && palette.DarkVibrant.getRgb().toString(),
              colorLight: palette.LightVibrant && palette.LightVibrant.getRgb().toString(),
              colorRegular: palette.Vibrant && palette.Vibrant.getRgb().toString(),
            }
          }
        })
      }
    })
  }
}

export default color

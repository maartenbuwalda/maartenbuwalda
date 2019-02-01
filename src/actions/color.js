export const SET_DOMINANT_COLOR = 'SET_DOMINANT_COLOR'
export const GET_DOMINANT_COLOR = 'GET_DOMINANT_COLOR'

// export const setDominantColor = palette => {
//   return {
//     type: SET_DOMINANT_COLOR,
//     payload: {
//       colorRegular: palette.color,
//       colorLight: palette.colorLight,
//       colorDark: palette.colorDark,
//     }
//   }
// }

export const getDominantColor = image => {
  return {
    type: GET_DOMINANT_COLOR,
    payload: {
      image
    }
  }
}

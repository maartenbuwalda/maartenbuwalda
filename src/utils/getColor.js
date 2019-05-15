const getColor = palette => {
  return {
    hex: {
      colorMutedDark: palette.DarkMuted.getHex(),
      colorMutedLight: palette.LightMuted.getHex(),
      colorMutedRegular: palette.Muted.getHex(),
      colorDark: palette.DarkVibrant.getHex(),
      colorLight: palette.LightVibrant.getHex(),
      colorRegular: palette.Vibrant.getHex(),
    },
    rgb: {
      colorMutedDark: palette.DarkMuted.getRgb().toString(),
      colorMutedLight: palette.LightMuted.getRgb().toString(),
      colorMutedRegular: palette.Muted.getRgb().toString(),
      colorDark: palette.DarkVibrant.getRgb().toString(),
      colorLight: palette.LightVibrant.getRgb().toString(),
      colorRegular: palette.Vibrant.getRgb().toString(),
    }
  }
}

export default getColor

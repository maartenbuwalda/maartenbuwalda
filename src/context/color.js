import React from 'react'

export const colors = {
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

export const ColorContext = React.createContext({
  theme: colors,
  updateTheme: () => {},
})

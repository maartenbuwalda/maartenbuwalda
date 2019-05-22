import getColor from './getColor'

const mockVibrant = {
  DarkMuted: {
    getHex: () => '',
    getRgb: () => [],
  },
  LightMuted: {
    getHex: () => '',
    getRgb: () => [],
  },
  Muted: {
    getHex: () => '',
    getRgb: () => [],
  },
  DarkVibrant: {
    getHex: () => '',
    getRgb: () => [],
  },
  LightVibrant: {
    getHex: () => '',
    getRgb: () => [],
  },
  Vibrant: {
    getHex: () => '',
    getRgb: () => [],
  },
}

describe('getColor util', () => {
  xit('should return plinkieplong', () => {
    getColor(mockVibrant)
    expect(mockVibrant.DarkMuted.getHex).toHaveBeenCalled()
  })
})

import * as actions from './color'

describe('Color actions', () => {
  it('should create an action to get the dominant color', () => {
    const image = 'test'
    const expectedAction = {
      type: 'GET_DOMINANT_COLOR',
      payload: { image }
    }
    expect(actions.getDominantColor(image)).toEqual(expectedAction)
  })
})
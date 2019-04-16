import { colorReducer, initialState } from './color'
import { GET_DOMINANT_COLOR, SET_DOMINANT_COLOR } from '../actions/color'
import { reducerReturnsInitialState } from '../testUtils/reducers'

describe('Color reducer', () => {
  reducerReturnsInitialState(colorReducer, initialState)

  it('should succeed: start fetching the dominant color', () => {
    const action = { type: GET_DOMINANT_COLOR }
    const expectedResult = {
      ...initialState,
      isFetching: true,
    }
    expect(colorReducer(initialState, action)).toEqual(expectedResult)
  })

  it('should succeed: finish fetching the dominant color', () => {
    const action = {
      type: SET_DOMINANT_COLOR,
      payload: {
        hex: 'hex',
        rgb: 'rgb'
      }
    }
    const expectedResult = {
      isFetching: false,
      ...action.payload,
    }
    expect(colorReducer(initialState, action)).toEqual(expectedResult);
  })
})
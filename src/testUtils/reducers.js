export const reducerReturnsInitialState = (reducer, initialState) => {
  it('should succeed: return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
}

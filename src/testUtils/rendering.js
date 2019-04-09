import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import 'jest-styled-components'

export const componentRenders = component => {
  it('renders correctly', () => {
    const shallowed = shallow(component)
    expect(toJson(shallowed)).toMatchSnapshot()
  });
}

export const connectedComponentRenders = component => {
  const middlewares = []
  const mockStore = configureStore(middlewares)
  const initialState = {}
  const store = mockStore(initialState)
  
  it('renders correctly', () => {
    const shallowed = shallow(component, store)
    expect(toJson(shallowed)).toMatchSnapshot()
  })
}

import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import 'jest-styled-components'

export const componentRenders = component => {
  it('renders correctly', () => {
    const shallowed = shallow(component)
    expect(toJson(shallowed)).toMatchSnapshot()
  });
}

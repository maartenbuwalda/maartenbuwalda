import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

export const componentRenders = component => {
  it('renders correctly', () => {
    const shallowed = shallow(component)
    expect(toJson(shallowed)).toMatchSnapshot()
  })
}

export const componentMounts = component => {
  it('mounts correctly', () => {
    const mounted = mount(component)
    expect(toJson(mounted)).toMatchSnapshot()
  })
}

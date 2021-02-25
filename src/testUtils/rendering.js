import { render } from '@testing-library/react'

export const componentRenders = component => {
  it('renders correctly', () => {
    const rendered = render(component)
    expect(rendered).not.toBeNull()
  })
}

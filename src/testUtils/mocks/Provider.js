import context from '../context'

export const ColorContext = ({
  Consumer (props) {
    return props.children(context)
  }
})

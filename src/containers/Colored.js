import { connect } from 'react-redux'

export const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export default Colored = component => {
  return connect(mapStateToProps)(component)
}

import Background from '../components/Background'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getDominantColor } from '../actions/color'

export const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getDominantColor: image => {
      dispatch(getDominantColor(image))
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Background))

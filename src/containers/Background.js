import Background from '../components/Background'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getDominantColor } from '../actions/color'

const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDominantColor: image => {
      dispatch(getDominantColor(image))
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Background))

import App from '../components/App'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getDominantColor } from '../actions/color'

const mapStateToProps = state => {
  return {
    coinrankings: state.coinrankings,
    grid: state.grid,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

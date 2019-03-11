import Logo from '../components/Logo'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export default withRouter(connect(mapStateToProps)(Logo))

import Heading from '../components/Heading'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export default withRouter(connect(mapStateToProps)(Heading))

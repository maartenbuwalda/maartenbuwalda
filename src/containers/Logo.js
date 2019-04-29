import Logo from '../components/Logo'
import { connect } from 'react-redux'

export const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export default connect(mapStateToProps)(Logo)

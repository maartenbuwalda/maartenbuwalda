import Card from '../components/Card'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    color: state.color,
  }
}

export default connect(mapStateToProps)(Card)

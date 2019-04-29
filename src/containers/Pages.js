import Pages from '../components/Pages'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages))

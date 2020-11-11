import {connect} from 'react-redux'
import {fetchData} from '../../../store/global-reducers/data-reducer'
import AppView from '../components/AppView'

const mapDispatchToProps = {
  fetchData
}

const mapStateToProps = (state) => ({
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(AppView)

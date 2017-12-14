import { connect } from 'react-redux'

import ChecklistList from '../../components/Checklists/ChecklistList'
import * as lists from './actions'

const mapStateToProps = (state) => ({
  lists: state.lists.toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (e) => {
    if (e.key !== 'Enter') return

    const value = e.target.value

    e.target.value = '' // Reset input field value

    return dispatch(lists.create(value))
  },
  onDelete: (id) => dispatch(
    lists.destroy(id)
  ),
  onUpdate: (e, id) => dispatch(
    lists.update({ id, value: e.target.value })
  ),
  onListChange: (e, id) => dispatch(
    lists.changeActive(id)
  ),
  onUpdatable: (id) => dispatch(
    lists.updatable(id)
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistList)

import * as lists from '../modules/lists'
import * as ui from '../modules/ui'
import Checklists from '../components/Checklists'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  active: state.ui.get('activeList'),
  collapsed: state.ui.get('collapsedMenu'),
  lists: state.lists.toJS(),
  modal: state.ui.get('modal').toJS()
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (data) => {
    return dispatch(lists.doCreate({
      id: uuid(),
      ...data
    }))
  },
  onDelete: (id) => dispatch(
    lists.doDelete(id)
  ),
  onUpdate: (data) => dispatch(
    lists.doUpdate(data)
  ),
  onEditClick: (id) => dispatch(
    ui.doShowUpdateModal({ id })
  ),
  onMenuClick: ({ item, key, keyPath }) => {
    if (key === 'create-list') {
      return dispatch(ui.doShowCreateModal())
    }

    dispatch(ui.doUpdateActiveList(key))
  },
  onHideModal: () => dispatch(
    ui.doHideModal()
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklists)

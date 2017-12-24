import { connect } from 'react-redux'

import * as lists from '../modules/lists'
import * as ui from '../modules/ui'
import Checklists from '../components/Checklists'

const mapStateToProps = (state) => ({
  active: state.ui.get('activeList'),
  collapsed: state.ui.get('collapsedMenu'),
  lists: state.lists.toJS(),
  showModal: state.ui.get('showModal')
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (value) => {
    return dispatch(lists.doCreate(value))
  },
  onDelete: (id) => dispatch(
    lists.doDelete(id)
  ),
  onUpdate: (e, id) => dispatch(
      lists.doUpdate({ id, value: e.target.value })
  ),
  onMenuClick: ({ item, key, keyPath }) => {
    if (key === 'create-list') {
      return dispatch(ui.doShowModal())
    }

    dispatch(ui.doUpdateActiveList(key))
  },
  onShowModal: () => dispatch(
    ui.doShowModal()
  ),
  onHideModal: () => dispatch(
    ui.doHideModal()
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklists)

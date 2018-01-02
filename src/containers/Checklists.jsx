import { actions as lists } from '../modules/lists'
import { actions as ui } from '../modules/ui'
import Checklists from '../components/Checklists'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  active: state.ui.get('activeList'),
  collapsed: state.ui.get('collapsedMenu'),
  lists: state.lists.toJS(),
  modal: state.ui.get('modal').toJS(),
  user: state.auth.getIn(['user', 'id'])
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: (data, user) => {
    dispatch(lists.doCreate({
      id: uuid(),
      user,
      ...data
    }))

    if (window.outerWidth < 480) {
      dispatch(ui.doToggleMenubar())
    }
  },
  onDelete: (id) => dispatch(
    lists.doDelete(id)
  ),
  onUpdate: (data, user) => dispatch(
    lists.doUpdate({ user, ...data })
  ),
  onEditClick: (id) => dispatch(
    ui.doShowUpdateModal({ id })
  ),
  onMenuClick: ({ item, key, keyPath }) => {
    if (key === 'create-list') {
      return dispatch(ui.doShowCreateModal())
    }

    dispatch(ui.doUpdateActiveList(key))

    if (window.outerWidth < 480) {
      dispatch(ui.doToggleMenubar())
    }
  },
  onHideModal: () => dispatch(
    ui.doHideModal()
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklists)

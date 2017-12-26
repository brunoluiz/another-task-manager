import ChecklistModal from './ChecklistModal'
import React from 'react'

export default (props) => (
  <ChecklistModal
      onCancel={props.onCancel}
      onOk={props.onOk}
      okText={'Edit list'}
      title={'Update list'}
      visible={props.visible}
      ref={props.onRef}
  />
)


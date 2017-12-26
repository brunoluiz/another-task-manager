import ChecklistModal from './ChecklistModal'
import React from 'react'

export default (props) => (
  <ChecklistModal
      onCancel={props.onCancel}
      onOk={props.onOk}
      okText={'Create list'}
      title={'Create a new list'}
      visible={props.visible}
      ref={props.onRef}
  />
)

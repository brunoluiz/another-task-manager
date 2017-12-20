import React from 'react';

import { Icon, Input, Modal } from 'antd'

export default (props) => (
  <Modal
    title='Create New List'
    visible={props.visible}
    onOk={props.onOk}
    onCancel={props.onCancel}
  >
    <Input
      onKeyPress={props.onCreate}
      onChange={props.onChange}
      placeholder='List name'
      prefix={<Icon type='bars' style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
  </Modal>
)

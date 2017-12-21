import React from 'react';

import {
  Form,
  Input,
  Modal
} from 'antd'

export default Form.create()((props) => {
  const { visible, onOk, onCancel, form } = props
  const { getFieldDecorator } = form;

  return (
    <Modal
      title='Create a new list'
      visible={visible}
      onOk={onOk}
      okText='Create list'
      onCancel={onCancel}
    >
      <Form
        layout='vertical'
        onSubmit={onOk}
      >
        <Form.Item label='What will be the name of your list?'>
          { getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please insert a name for your list' }
              ]
            })(<Input placeholder='List name' autoFocus />)
          }
        </Form.Item>
      </Form>
    </Modal>
  )
})

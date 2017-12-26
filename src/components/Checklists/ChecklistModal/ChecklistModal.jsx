import React from 'react';

import {
  Form,
  Input,
  Modal
} from 'antd'

export default Form.create()((props) => {
  const {
    form,
    onCancel,
    onOk,
    okText,
    title,
    visible
  } = props

  const {
    getFieldDecorator
  } = form;

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      okText={okText}
      onCancel={onCancel}
    >
      <Form
        layout='vertical'
        onSubmit={onOk}
      >
        <Form.Item>
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

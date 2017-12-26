import React from 'react';

import {
  Form,
  Input,
  Modal
} from 'antd'

export default Form.create({
  mapPropsToFields: ({ data }) => {
    if (!data) return {}

    return {
      name: Form.createFormField({
        value: data.name
      })
    }
  }
})((props) => {
  const {
    form,
    onCancel,
    onOk,
    okText,
    title,
    visible
  } = props

  const {
    getFieldDecorator,
    setFieldsValue
  } = form;

  const items = (
    <Form.Item>
      {
        getFieldDecorator('name', {
          rules: [
            { required: true, message: 'Please insert a name for your list' }
          ]
        })(<Input placeholder='List name' autoFocus />)
      }
    </Form.Item>
  )

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
      { items }
      </Form>
    </Modal>
  )
})

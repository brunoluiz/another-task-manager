// @flow

import React from 'react'

import {
  Form,
  Input,
  Modal
} from 'antd'

type Props = {
  form: mixed,
  onCancel: Function,
  onOk: Function,
  okText: String,
  title: String,
  visible: Boolean
}

export default Form.create({
  mapPropsToFields: ({ data }) => {
    if (!data) return {}

    return {
      name: Form.createFormField({
        value: data.name
      })
    }
  }
})(({
  form,
  onCancel,
  onOk,
  okText,
  title,
  visible
}) => {

  const { getFieldDecorator } = form

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

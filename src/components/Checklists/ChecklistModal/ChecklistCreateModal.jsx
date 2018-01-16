// @flow

import React from 'react'

import ChecklistModal from './ChecklistModal'
import { Form } from 'antd'

type Props = {
  onCreate: (values : Object) => mixed,
  onHide: () => mixed,
  visible: boolean
}

export default class extends React.Component<Props> {
  form: Form
  handleSubmit: () => mixed
  saveFormRef: () => mixed

  constructor (props : Props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveFormRef = this.saveFormRef.bind(this)
  }

  handleSubmit (e : SyntheticEvent<>) {
    e.preventDefault()

    this.form.validateFields((err, values) => {
      if (err) return

      this.props.onCreate(values)
      this.props.onHide()
      this.form.resetFields()
    })
  }

  saveFormRef (form : Form) {
    this.form = form
  }

  render () {
    return (
      <ChecklistModal
        onCancel={this.props.onHide}
        onOk={this.handleSubmit}
        okText={'Create list'}
        title={'Create a new list'}
        visible={this.props.visible}
        ref={this.saveFormRef}
      />
    )
  }
}

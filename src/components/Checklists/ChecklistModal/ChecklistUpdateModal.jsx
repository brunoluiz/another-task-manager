import ChecklistModal from './ChecklistModal'
import React from 'react'

export default class extends React.Component {
  handleSubmit (e) {
    e.preventDefault()

    this.form.validateFields((err, values) => {
      if (err) return

      this.props.onUpdate({
        id: this.props.data.id,
        ...values
      })
      this.props.onHide()
      this.form.resetFields()
    })
  }

  saveFormRef (form) {
    this.form = form
  }

  render () {
    return (
      <ChecklistModal
        onCancel={this.props.onHide}
        onOk={this.handleSubmit}
        okText={'Update list'}
        title={'Edit list'}
        visible={this.props.visible}
        ref={this.saveFormRef}
        data={this.props.data}
      />
    )
  }
}

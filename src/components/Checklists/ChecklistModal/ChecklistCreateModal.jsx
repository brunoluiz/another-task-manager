import ChecklistModal from './ChecklistModal'
import React from 'react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveFormRef = this.saveFormRef.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    this.form.validateFields((err, values) => {
      if (err) return

      this.props.onCreate(values)
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
        okText={'Create list'}
        title={'Create a new list'}
        visible={this.props.visible}
        ref={this.saveFormRef}
      />
    )
  }
}

import React, { Component } from 'react'
import uuid from 'uuid/v4'

import TaskList from './TaskList'

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: uuid(), value: 'test', done: false },
        { id: uuid(), value: 'hello world', done: true }
      ]
    }

    this.getTaskIndex = this.getTaskIndex.bind(this)
    this.onCreate = this.onCreate.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onToogle = this.onToogle.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }

  getTaskIndex(id) {
    return this.state
      .tasks
      .findIndex(task => task.id === id)
  }

  onCreate(e) {
    if (e.key !== 'Enter') return

    const tasks = [...this.state.tasks, {
      id: uuid(),
      value: e.target.value,
      done: false
    }]

    this.setState({ tasks })
  }

  onDelete(e, id) {
    const tasks = this.state.tasks
      .filter(task => task.id !== id)

    this.setState({ tasks })
  }

  onToogle(e) {
    const index = this.getTaskIndex(e.target.value)
    if (index < 0) return

    const tasks = this.state.tasks
    tasks[index].done = !tasks[index].done

    this.setState({ tasks })
  }

  onUpdate(e, task) {
    const index = this.getTaskIndex(task.id)
    if (index < 0) return

    const tasks = this.state.tasks
    tasks[index].value = e.target.value

    this.setState({ tasks })
  }

  render() {
    return (
      <TaskList
        tasks={this.state.tasks}
        onCreate={this.onCreate}
        onDelete={this.onDelete}
        onToogle={this.onToogle}
        onUpdate={this.onUpdate}
      />
    )
  }
}

export default Tasks

import React, { Component } from 'react'

import ChecklistList from './Checklists'
import Tasks from './Tasks'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChecklistList/>
        <Tasks/>
      </div>
    )
  }
}

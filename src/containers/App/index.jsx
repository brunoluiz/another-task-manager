import React, { Component } from 'react'
import uuid from 'uuid/v4'

import Tasks from '../Tasks'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tasks/>
    )
  }
}

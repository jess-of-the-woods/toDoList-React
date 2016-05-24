import React, { Component } from 'react'

class TaskList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
      <h2>Task List</h2>
      <ul>{this.props.tasks.map(function(task, index){
        return <li key={index}>{task}</li>
      })}</ul>
      </div>
    )
  }
}

export default TaskList

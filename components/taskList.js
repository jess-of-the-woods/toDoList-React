import React, { Component } from 'react'

class TaskList extends Component {
  constructor (props) {
    super(props)
  }

handleDeleteClicks(e, index){
  e.preventDefault()
  this.props.deleteTask(e.target.dataset.key)
}

  render () {
    return (
      <div>
        <h2>Task List</h2>
        <ul>{this.props.tasks.map((task, index) => {
          return <div>
                    <li key={index}>{task}</li><button data-key={index} onClick={this.handleDeleteClicks.bind(this)} >Delete</button>
                  </div>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TaskList

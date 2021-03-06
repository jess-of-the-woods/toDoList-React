import React, { Component } from 'react'
import NewTask from './newTask'
import TaskList from './taskList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {tasks: ['blacken chin & jaw line', 'encrust cheeks with barnacles', 'polish toes', 'grind teeth to fine points', 'promote finger buoyancy', 'weigh my ears', 'paint the town blackish-red']}
  }

  addTask(task) {
    var arrayvar = this.state.tasks.slice()
    arrayvar.push(task)
    this.setState({ tasks: arrayvar })
  }

  deleteTask(index){
    var arrayvar = this.state.tasks.slice()
    arrayvar.splice(index, 1)
    this.setState({ tasks: arrayvar })
  }

  render() {
    return (
      <div>
        <NewTask name='To Do List - React' addTask={this.addTask.bind(this)}/>
        <TaskList deleteTask={this.deleteTask.bind(this)} tasks={this.state.tasks}/>
      </div>
    )
  }
}
export default App

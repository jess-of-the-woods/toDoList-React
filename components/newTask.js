import React, { Component } from 'react'
import TaskList from './taskList'

class NewTask extends Component {
  constructor (props) {
    super(props)
    this.state = {field: ''}
  }

  handleClick(e){
    e.preventDefault()
    console.log()
    this.props.addTask(this.state.field)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <h2>Enter a new task</h2>
        <form>
          <input type='text' name='task' onChange={this.handleField.bind(this)} ></input>
          <button onClick={this.handleClick.bind(this)} ></button>
        </form>
      </div>
    )
  }
  handleField(event){
    this.setState({field: event.target.value})
    console.log(event.target.value)
  }

  handleSubmit(){
    console.log(bg)
  }
}

export default NewTask

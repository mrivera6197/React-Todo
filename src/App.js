import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

const tasks = [
  {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
  },
  {
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state ={
      tasks:tasks
    }
  }

  handleToggleItem = (taskId) => {
    this.setState({
      tasks:this.state.tasks.map(task=>{
        if(taskId === task.id) {
          return {
            ...task, 
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  clearItems = () => {
    this.setState({
      tasks:this.state.tasks.filter(task=>!task.completed)
    })
  }

  addItem = (input) => {
    this.setState({
      tasks:[...this.state.tasks, {
        task: input,
        id: `${Date.now()}`,
        completed: false,
      }]
    })
  }

  render() {
    return (
      <div className='App'>
          <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList clearItems={this.clearItems} handleToggleItem={this.handleToggleItem} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;

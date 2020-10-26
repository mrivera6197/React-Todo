import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      input: 'mali'
    }
  }

  handleNameChange = () => {
    console.log('here')
    this.setState({
      input: 'jackie'
    })
  }

  render() {
    return (
      <div>
        <h1>hello Mali {this.state.input}</h1>
        <button onClick={this.handleNameChange}>change to mali</button>
        <TodoList />
      </div>
    );
  }
}

export default App;

import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
          input:''
        }
      }

    onChange = e => {
       this.setState({
           input: e.target.value
       })
    }

    onSubmit = e => {
       e.preventDefault()
       this.props.addItem(this.state.input)

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                onChange={this.onChange}
                type='text' 
                name='task'
                value={this.state.input}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm

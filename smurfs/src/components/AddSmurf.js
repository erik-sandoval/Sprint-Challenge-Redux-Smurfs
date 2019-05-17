import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class AddSmurf extends React.Component {

    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSumbit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    Name: <input
                        name='name'
                        onChange={this.handleChanges}
                        value={this.state.name}
                    ></input>
                    Age: <input
                        name='age'
                        onChange={this.handleChanges}
                        value={this.state.age}
                    ></input>
                    Height: <input
                        name='height'
                        onChange={this.handleChanges}
                        value={this.state.height}
                    ></input>
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(AddSmurf)
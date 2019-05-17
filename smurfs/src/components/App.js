import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import { getSmurfs } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    if (this.props.isFetching) {
      return <h1>LOADING</h1>
    }
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <h1>{smurf.name}</h1>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);

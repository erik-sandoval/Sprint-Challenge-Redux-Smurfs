import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import AddSmurf from './AddSmurf';
import { getSmurfs } from '../actions';
import {deleteSmurf} from '../actions'
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

  deleteSmurf= smurf => {
    this.props.deleteSmurf(smurf)
  }

  render() {
    console.log(this.props)
    if (this.props.isFetching) {
      return <h1>LOADING</h1>
    }
    return (
      <div className="App">
        <Router>

          <Route path='/add-smurf' component={AddSmurf} />

          <Link to='/'>HOME</Link>
          <Link to='/add-smurf'>ADD SMURF</Link>
          {this.props.smurfs.map(smurf => (
            <div key={smurf.id}>
              <h1>{smurf.name}</h1>
              <h3>Age: {smurf.age}</h3>
              <h3>Height: {smurf.height}</h3>
              <button onClick={() => this.deleteSmurf(smurf)}>Delete</button>
            </div>
          ))}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.getSmurfs.smurfs,
    isFetching: state.getSmurfs.fetchingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);

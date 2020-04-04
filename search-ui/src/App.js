import React, {Component} from 'react';
import InputForm from './input-form';
import LinearSearch from './linear-search';
import BinarySearch from './binary-search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: '',
      value: ''
    }

    this.setArrayAndValueState = this.setArrayAndValueState.bind(this);
  }

  setArrayAndValueState(array, value) {
    return this.setState({
      array: array,
      value: value
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm setArrayAndValueState={this.setArrayAndValueState}/>
        <LinearSearch array={this.state.array} value={this.state.value}/>
        <BinarySearch array={this.state.array} value={this.state.value}/>
      </div>
    );
  }
}

export default App;
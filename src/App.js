// App.js

import React, { Component } from 'react';
import Personal from './components/personal/Personal';
import CVDisplay from './components/CVDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (e) => {
    this.setState({});
  };

  render() {
    return (
      <>
        <div> hello? </div>

        <Personal />
        <CVDisplay />
      </>
    );
  }
}

export default App;

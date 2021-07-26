// App.js

import React, { Component } from 'react';
import Personal from './components/Personal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalDetails: {
        firstName: '',
        lastName: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
    });
  };

  render() {
    const { personalDetails } = this.state;

    return (
      <>
        <div> hello? </div>

        <Personal personalDetails={personalDetails}/>
      </>
    );
  }
}

export default App;

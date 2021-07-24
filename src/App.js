// App.js

import React, { Component } from 'react';
import Personal from './components/Personal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cvDetails: {
        firstName: 'First Name',
      },
    };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     firstName: e.target.value,
  //   });
  // };

  render() {
    return (
      <>
        <div> hello? </div>

        <Personal />
      </>
    );
  }
}

export default App;

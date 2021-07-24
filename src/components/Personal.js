import React from 'react';
import validator from 'validator';

class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      cityLocation: '',
      setEmailError: '',
      linkedinURL: '',
      githubURL: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      console.log('Valid Email :)');
    } else {
      console.log('Enter valid Email!');
    }
  };

  validatePhone = (e) => {
    let phone = e.target.value;

    if (validator.isMobilePhone(phone)) {
      console.log('Valid phone :)');
    } else {
      console.log('Enter valid phone!');
    }
  };

  handleChange(event) {
    this.setState({
      firstName: event.target.value,
      lastName: event.target.value,
      cityLocation: event.target.value,
      phoneNumber: event.target.value,
      emailAddress: event.target.value,
      linkedinURL: event.target.value,
      githubURL: event.target.value,
    });
  }

  render() {
    return (
      <>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="cityLocation"
          placeholder="City"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.value}
          onChange={this.validatePhone}
        ></input>
        <input
          type="text"
          name="emailAddress"
          placeholder="Email Address"
          value={this.state.value}
          onChange={this.validateEmail}
        ></input>
        <input
          type="text"
          name="linkedinURL"
          placeholder="Linked In"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="githubURL"
          placeholder="GitHub"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}

export default Personal;

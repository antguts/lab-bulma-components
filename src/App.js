import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js';
import 'bulma/css/bulma.css';
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton.js';
import Signup from './signup/Signup.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton type="button is-rounded my-className is-danger is-small"/>
        <Signup />
      </div>
    );
  }
}

export default App;

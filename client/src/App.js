import React from 'react';
import './App.css';
import FormikRegistrationForm from './RegistrationForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <p>placeholder app</p>
        <FormikRegistrationForm />
      </div>
    );
  }
}

export default App;

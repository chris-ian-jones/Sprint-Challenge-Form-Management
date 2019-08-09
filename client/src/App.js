import React from 'react';
import './App.css';
import FormikRegistrationForm from './RegistrationForm'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  color: darkblue;
  font-family: 'IBM Plex Mono', monospace;
  margin: 40px 0 40px;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <StyledTitle>Registration Form</StyledTitle>
        <FormikRegistrationForm />
      </div>
    );
  }
}

export default App;

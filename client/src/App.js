import React from 'react';
import './App.css';
import FormikRegistrationForm from './RegistrationForm'
import styled from 'styled-components'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  height: 100vh;
  max-height: 100%;
`

const StyledTitle = styled.h1`
  color: darkblue;
  font-family: 'IBM Plex Mono', monospace;
  margin: 0 0 40px 0;
`

// use of class component
class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <StyledAppContainer className="App">
        <StyledTitle>Registration Form</StyledTitle>
        <FormikRegistrationForm />
      </StyledAppContainer>
    );
  }
}

export default App;

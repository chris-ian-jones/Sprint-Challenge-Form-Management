import React from 'react';
import ReactDOM from 'react-dom';
import FormikRegistrationForm from './RegistrationForm'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

it('(FormikRegistrationForm) renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikRegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('Username error message is displayed if no username is submitted when sign up button is pressed', () => {
//   const formikUsernameErrorMessage = 'Username is required'
//   const { getByTestId } = render(<FormikRegistrationForm />)
//   fireEvent.click(getByTestId('formSubmitButton'))
//   expect(getByTestId('usernameErrorMessage').textContent).toBe(formikUsernameErrorMessage)
// })
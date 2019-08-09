import React from 'react';
import ReactDOM from 'react-dom';
import FormikRegistrationForm from './RegistrationForm'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

// unit test for function
it('(FormikRegistrationForm) renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikRegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// unit test for event
it('Registration Form sign up button renders and clicks without crashing', () => {
  const formikUsernameErrorMessage = 'Username is required'
  const { getByTestId } = render(<FormikRegistrationForm />)
  fireEvent.click(getByTestId('formSubmitButton'))
})
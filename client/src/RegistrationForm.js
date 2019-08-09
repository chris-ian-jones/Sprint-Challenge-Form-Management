import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

function RegistrationForm({ values, errors, touched }) {
  return (
    <Form>
      <Field type="username" name='username' placeholder='Username' />
      <Field type='password' name='password' placeholder='Password' />
      <button>Sign Up</button>
    </Form>
  )
}

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },

  handleSubmit(values) {
    console.log(values)
  }
})(RegistrationForm)

export default FormikRegistrationForm
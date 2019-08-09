import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

function RegistrationForm({ values, errors, touched }) {
  return (
    <Form>
      <Field type="username" name='username' placeholder='Username' />
      <Field type='password' name='password' placeholder='Password' />
      <button type='submit'>Sign Up</button>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
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

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  }),

  handleSubmit(values) {
    console.log(values)
  }
})(RegistrationForm)

export default FormikRegistrationForm
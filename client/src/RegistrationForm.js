import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import MealCard from './MealCard';
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 90vw;
  margin: 40px 5vw 0 5vw;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  flex-wrap: wrap;
`

const StyledField = styled(Field)`
  height: 40px;
  width: 200px;
`

const StyledButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: green;
  color: white;
  margin-bottom: 10px;
`

const StyledErrorMessages = styled.p`
  color: red;
  margin-top: 20px;
`

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (status) {
      setData(status)
      console.log(data)
    }
  }, [status])

  return (
    <>
      <Form>
        <StyledField type="username" name='username' placeholder='Username' />
        <StyledField type='password' name='password' placeholder='Password' />
        <StyledButton type='submit' data-testid='formSubmitButton'>Sign Up</StyledButton>
        <div data-test-id='error-messages'>
          {touched.username && errors.username && <StyledErrorMessages data-testid='usernameErrorMessage'>{errors.username}</StyledErrorMessages>}
          {touched.password && errors.password && <StyledErrorMessages>{errors.password}</StyledErrorMessages>}
        </div>
      </Form>
      <CardContainer>
        {data.map(meal => <MealCard key={meal.name} name={meal.name} course={meal.course} technique={meal.technique}/>)}
      </CardContainer>
    </>
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

  handleSubmit(values, { setStatus }) {
    console.log(values)
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        console.log('API call good: ', res.data)

        axios.get('http://localhost:5000/api/restricted/data')
        .then(res => {
          console.log('API get is good :', res.data)
          setStatus(res.data)
        })
      })
      
      .catch(err => console.log('Axios error: ', err))
  }
})(RegistrationForm)

export default FormikRegistrationForm
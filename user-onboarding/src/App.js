import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'

import './App.css';
import './Form'
import Form from './Form';
import formSchema from './formSchema'
import User from './User'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUser = () => {}

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.log(err);
    })
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),

      terms: ['tos'].filter(term => formValues[term])
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}
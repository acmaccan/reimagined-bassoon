import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('First name is required')
            .min(2, 'Must be 3 characters or more')
            .max(15, 'Must be 15 characters or less'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
          password1: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Passwords must match')
            .required('Password is required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Name' />

            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='hola@google.com'
            />

            <MyTextInput
              label='Password'
              name='password1'
              type='password'
              placeholder='******'
            />

            <MyTextInput
              label='Confirm Password'
              name='password2'
              type='password'
              placeholder='******'
            />

            <button type='submit'>Create</button>
            <button type='reset'>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

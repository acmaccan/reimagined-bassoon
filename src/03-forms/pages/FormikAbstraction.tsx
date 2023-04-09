import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('First name is required')
            .max(25, 'Must be 25 characters or less'),
          lastName: Yup.string()
            .required('Last name is required')
            .max(25, 'Must be 25 characters or less'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
          terms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .required()
            .notOneOf(['designer'], 'Invalid Job Type'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='First Name'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Last Name'
            />

            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='hola@google.com'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Select a job type</option>
              <option value='designer'>Designer</option>
              <option value='development'>Developer</option>
              <option value='product'>Product Manager</option>
            </MySelect>

            <MyCheckbox label='Terms & Conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email address</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Select a job type</option>
              <option value='designer'>Designer</option>
              <option value='development'>Developer</option>
              <option value='product'>Product Manager</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms & Conditions
            </label>

            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

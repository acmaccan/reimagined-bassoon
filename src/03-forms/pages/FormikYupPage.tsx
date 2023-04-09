import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .max(25, 'Must be 25 characters or less'),
      lastName: Yup.string()
        .required('Last name is required')
        .max(25, 'Must be 25 characters or less'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    }),
  })

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          {...getFieldProps('firstName')}
          
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

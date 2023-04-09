import { useFormik, FormikErrors } from 'formik'
import '../styles/styles.css'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    if (!firstName) {
      errors.firstName = 'First name is required'
    } else if (firstName.length > 25) {
      errors.firstName = 'Must be 25 characters or less'
    }

    if (!lastName) {
      errors.lastName = 'Last name is required'
    } else if (lastName.length > 25) {
      errors.lastName = 'Must be 25 characters or less'
    }

    if (!email) {
      errors.email = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate,
  })

  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

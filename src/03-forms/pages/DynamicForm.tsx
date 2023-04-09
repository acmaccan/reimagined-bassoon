import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import formJson from '../data/custom-form.json'
import '../styles/styles.css'
import { MySelect, MyTextInput } from '../components'

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Required')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value, `Must be at least ${(rule as any).value} characters`)
    }

    if (rule.type === 'maxLength') {
      schema = schema.max((rule as any).value, `Must be at most ${(rule as any).value} characters`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }

    requiredFields[input.name] = schema
  }
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                )
              }

              return <span>{`Type ${type} not supported`}</span>
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

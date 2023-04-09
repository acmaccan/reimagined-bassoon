import { useField, ErrorMessage } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: any // Any other property
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [
    field,
    // meta
  ] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        // className='custom-span-error-class'
      />
      {/* {meta.touched && meta.error && (
        <span className='error'>{meta.error}</span>
      )} */}
    </>
  )
}

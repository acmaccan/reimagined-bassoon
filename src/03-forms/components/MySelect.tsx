import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string
  name: string
  placeholder?: string
  [x: string]: any // Any other property
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
      />
    </>
  )
}

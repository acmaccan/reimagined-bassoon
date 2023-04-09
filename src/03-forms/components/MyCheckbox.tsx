import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string
  name: string
  [x: string]: any // Any other property
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component='span'
      />
    </>
  )
}

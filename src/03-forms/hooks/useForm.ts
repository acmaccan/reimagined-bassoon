import { useState, ChangeEvent, FormEvent } from 'react'

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const onReset = () => {
    setFormData({ ...initState })
  }

  const isEmailValid = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  return {
    ...formData,
    formData,
    setFormData,
    onChange,
    onSubmit,
    onReset,
    isEmailValid,
  }
}

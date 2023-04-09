import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    onSubmit,
    onReset,
    isEmailValid,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit} noValidate>
        <input
          type='text'
          placeholder='Name'
          value={name}
          name='name'
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Name is required</span>}
        <input
          type='email'
          placeholder='Email'
          value={email}
          name='email'
          onChange={onChange}
          className={`${!isEmailValid(email) && 'has-error'}`}
        />
        {!isEmailValid(email) && <span>Valid email is required</span>}
        <input
          type='password'
          placeholder='Password 1'
          value={password1}
          name='password1'
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Password is required</span>}
        {password1.trim().length <= 6 && password1.trim().length > 0 && <span>Min 6 characters required</span>}
        <input
          type='password'
          placeholder='Password 2'
          value={password2}
          name='password2'
          onChange={onChange}
        />
        {password1.trim() !== password2.trim() && <span>Passwords does not match</span>}
        <button type='submit'>Register</button>
        <button type='reset' onClick={onReset}>
          Reset
        </button>
      </form>
    </div>
  )
}

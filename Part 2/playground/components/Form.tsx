'use client'
import { createUser } from '@/utils/actions'
import { useFormStatus, useFormState } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  )
}

function Form() {
  const [message, formAction] = useFormState(createUser, null)

  return (
    <form className={formStyle} action={formAction}>
      {message && <p>{message}</p>}
      <h2 className='text-2xl capitalize mb-4'>create user</h2>
      <input
        type='text'
        name='firstName'
        required
        className={inputStyle}
        defaultValue='peter'
      />
      <input
        type='text'
        name='lastName'
        required
        className={inputStyle}
        defaultValue='smith'
      />
      <SubmitButton />
    </form>
  )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8'
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700'
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'

export default Form

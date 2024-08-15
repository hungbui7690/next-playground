'use client'
import { createUser } from '@/utils/actions'
import { useFormStatus, useFormState } from 'react-dom' // 4.

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  )
}

function Form() {
  // 5. const [state, formAction] = useFormState(fn, initialState)
  const [message, formAction] = useFormState(createUser, null)

  return (
    // 6. instead of passing createUser to formAction directly -> we pass formAction
    <form className={formStyle} action={formAction}>
      {/* 7. render state  */}
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

      {/* 5. */}
      <SubmitButton />

      {/* OLD */}
      {/* <button type='submit' className={btnStyle}>
      submit
    </button> */}
    </form>
  )
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8'
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700'
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'

export default Form

'use client'

import { createTaskCustom } from '@/utils/actions'
import { useFormStatus, useFormState } from 'react-dom' // 2. useFormState is a Hook that allows you to update state based on the result of a form action.

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait... ' : 'create task'}
    </button>
  )
}

// 3.
const initialState = {
  message: null,
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState) // 4. this function receives the function and the initialState -> then return the last state + formAction

  return (
    // 4. instead of put createTaskCustom -> we use formAction
    <form action={formAction}>
      {/* 6. */}
      {state.message ? <p className='mb-2'>{state.message}</p> : null}
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}
export default TaskForm

'use client' // add this

import { createTaskCustom } from '@/utils/actions' // 2.
import { useFormStatus } from 'react-dom' // 3.

const SubmitButton = () => {
  const { pending } = useFormStatus() // 4.

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
const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
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

'use client' // 1.
import { useFormStatus } from 'react-dom'
import { deleteTask } from '@/utils/actions'

// 2.
const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />

      {/* 3. */}
      <SubmitBtn />
    </form>
  )
}

export default DeleteForm

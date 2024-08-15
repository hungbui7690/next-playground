import { deleteUser, removeUser } from '@/utils/actions'

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id) // 2.

  return (
    <form action={removeUserWithId}>
      {/* 3. we don't need this one -> change the value to 'shakeAndBake' */}
      <input type='hidden' name='name' value='shakeAndBake' />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        delete
      </button>
    </form>
  )
}

export default DeleteButton

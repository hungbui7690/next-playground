'use client' // MUST HAVE
import { editTask } from '@/utils/actions'

// 5. extract
const EditForm = ({ task }) => {
  const { id, completed, content } = task // 6.
  console.log(id, completed, content)

  return (
    <form
      action={editTask} // 7.
      className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'
    >
      {/* 8. to send the ID to action.js  */}
      <input type='hidden' name='id' value={id} />

      {/* content */}
      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='input input-bordered w-full'
      />

      {/* completed */}
      <div className='form-control my-4'>
        <label className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button className='btn btn-primary btn-block btn-sm'>edit</button>
    </form>
  )
}
export default EditForm

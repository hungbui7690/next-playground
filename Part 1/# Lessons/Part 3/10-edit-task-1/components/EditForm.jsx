'use client'

const EditForm = () => {
  return (
    <form className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'>
      {/* 3. hidden */}
      <input type='hidden' name='id' />

      {/* 4. content */}
      <input
        type='text'
        required
        name='content'
        className='input input-bordered w-full'
      />

      {/* 5. completed */}
      <div className='form-control my-4'>
        <label className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>

      {/* 6. */}
      <button className='btn btn-primary btn-block btn-sm'>edit</button>
    </form>
  )
}

export default EditForm

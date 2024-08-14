import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

// 1. must be async
const createTask = async (formData) => {
  'use server' // a. MUST HAVE

  const content = formData.get('content') // b. can add some validator later
  console.log(content)

  // c. now, we can test -> though it doesn't show in the UI (because this is static page) -> but data is added to DB
  await prisma.task.create({
    data: {
      content,
    },
  })

  revalidatePath('/tasks') // d. to see the latest changes in the UI -> need to use this function
}

const TaskForm = () => {
  // 2. add action
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <button type='submit' className='btn join-item btn-primary'>
          create task
        </button>
      </div>
    </form>
  )
}

export default TaskForm

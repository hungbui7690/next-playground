import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'

const TaskPage = async ({ params }) => {
  const task = await getTask(params.id) // 3. get single task
  console.log(task)

  return (
    <>
      {/* 4. passing task */}
      <EditForm task={task} />

      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Back to Tasks
        </Link>
      </div>
    </>
  )
}
export default TaskPage

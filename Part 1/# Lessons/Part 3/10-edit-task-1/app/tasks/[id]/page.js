import EditForm from '@/components/EditForm'
import Link from 'next/link'

const TaskPage = async ({ params }) => {
  console.log(params.id) // 1.

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Back to Tasks
        </Link>

        {/* 2. go to EditForm */}
        <EditForm />
      </div>
    </>
  )
}
export default TaskPage

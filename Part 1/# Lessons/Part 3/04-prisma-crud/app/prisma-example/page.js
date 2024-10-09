import prisma from '@/utils/db' // 1.

// 2.
const prismaHandlers = async () => {
  // add task
  await prisma.task.create({
    data: {
      content: 'wake up',
    },
  })

  // get all task -> can have empty object -> or we can use orderBy to filter
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return allTasks
}

// 3.
const PrismaExample = async () => {
  const tasks = await prismaHandlers() // a. get all tasks

  return (
    <div>
      <h1 className='text-3xl font-medium mb-4'>Prisma Example </h1>
      {tasks.map((task) => {
        // b. display tasks
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😅😎 {task.content}
          </h2>
        )
      })}
    </div>
  )
}

export default PrismaExample

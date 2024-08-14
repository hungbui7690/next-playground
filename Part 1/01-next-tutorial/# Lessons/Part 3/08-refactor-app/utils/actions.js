'use server' // # need to have this

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

// 1.
export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

// 2. go to TaskList
export const createTask = async (formData) => {
  const content = formData.get('content')

  await prisma.task.create({
    data: {
      content,
    },
  })

  revalidatePath('/tasks')
}

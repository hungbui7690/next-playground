/*
  Delete Action
  - actions.ts -> deleteUser(formData) 
    -> because it needs formData as parameter -> in DeleteButton form -> it needs <input name='id'/>
    -> but we don't want to show the ID in the DeleteButton component -> type='hide' -> <input name='id' type='hide'/>


*/

'use server'

import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'

type User = {
  id: string
  firstName: string
  lastName: string
}

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const result = await readFile('users.json', { encoding: 'utf8' })
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState)

  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }

  try {
    await saveUser(newUser)
    revalidatePath('/actions')
    return 'user created successfully...⚡⚡'
  } catch (error) {
    console.error(error)
    return 'failed to create user...❌❌'
  }
}

// 1. go to components/DeleteButton
export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const users = await fetchUsers()
  const updatedUsers = users.filter((user: User) => user.id !== id)

  await writeFile('users.json', JSON.stringify(updatedUsers))
  revalidatePath('/actions')
}

/*
  Bind Option
  - An alternative to passing arguments as hidden input fields in the form (e.g. `<input type="hidden" name="userId" value={userId} />`) is to use the bind option. 
    -> check Element tab -> Delete Button
  - With this approach, the value is not part of the rendered HTML and will not be encoded.
  - .bind works in both Server and Client Components. It also supports progressive enhancement.


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

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const users = await fetchUsers()
  const updatedUsers = users.filter((user: User) => user.id !== id)

  await writeFile('users.json', JSON.stringify(updatedUsers))
  revalidatePath('/actions')
}

// 1. add id param
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string
  console.log(name)

  const users = await fetchUsers()
  const updatedUsers = users.filter((user) => user.id !== id)
  await writeFile('users.json', JSON.stringify(updatedUsers))
  revalidatePath('/actions')
}

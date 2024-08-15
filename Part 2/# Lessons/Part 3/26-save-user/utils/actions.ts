/*
  Save User
  - just as an example
  - create "users.json" (root !!!)
  - just to mimic to get data from db 
  - work locally -> won't work on deployment


*******************************

  await writeFile('users.json', JSON.stringify(users))
  -> though we're in "utils/" now -> we don't need to go back 1 level 


*/

'use server'

import { readFile, writeFile } from 'fs/promises'

type User = {
  id: string
  firstName: string
  lastName: string
}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf8' })
  const users = result ? JSON.parse(result) : []
  return users
}

const saveUser = async (user: User) => {
  const users = await fetchUsers()
  users.push(user)
  await writeFile('users.json', JSON.stringify(users))
}

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }
  await saveUser(newUser)
}

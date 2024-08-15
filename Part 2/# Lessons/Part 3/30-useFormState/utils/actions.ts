/*
  useFormState
  -> a Hook that allows you to update state based on the result of a form action.
  -> useFormState : https://react.dev/reference/react-dom/hooks/useFormState


********************************

  1. actions.ts
  2. Form.tsx


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

// 1. add prevState param
export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState) // current state of the form

  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const newUser: User = { firstName, lastName, id: Date.now().toString() }

  try {
    await saveUser(newUser)
    revalidatePath('/actions')
    // throw Error() -> THIS NOT WORKING
    return 'user created successfully...⚡⚡' // 2. return state -> insert successfully
  } catch (error) {
    console.error(error)
    return 'failed to create user...❌❌' // 3. return state -> error -> then go to Form.tsx
  }
}

/*
  Revalidate Cache & Redirect


****************************

  - don't "redirect" place inside "try" block
    -> this will trigger error

      try {
        await saveUser(newUser);
        redirect('/')
      } catch (error) {
        console.error(error);
      }


*/

'use server'

import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache' // 1.
import { redirect } from 'next/navigation'

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

  revalidatePath('/actions') // 2.

  // 3. if the data is displayed in a different page
  // redirect('/')
}

/*
  Pending State
  @@
  - useFormStatus() -> The useFormStatus Hook provides status information of the last form submission.
  - make sure <Form> is <Client-Component>
  - The useFormStatus Hook must be called from a component that is rendered inside a <form>.
  - useFormStatus will only return status information for a parent <form>.
    It will not return status information for any <form> rendered in that same component or children components.
  @@


********************************

  - https://react.dev/reference/react-dom/hooks/useFormStatus)


********************************

  - We want to set the button text to Submitting... when it's loading
    -> then back to Submit after done 
    -> useFormStatus

  1. actions.ts -> in createUser switch back to revalidatePath(/actions)
  2. Form.tsx


*/

'use server'

import { readFile, writeFile } from 'fs/promises'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type User = {
  id: string
  firstName: string
  lastName: string
}

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // 1a.
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

  revalidatePath('/actions') // 1b.
}

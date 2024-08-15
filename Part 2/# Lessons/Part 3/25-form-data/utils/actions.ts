/*
  Actions File


******************************

  1. create utils/actions.ts
  2. make "Form" Client Component ('use client')
    -> import in Form


*/

'use server'

export const createUser = async (formData: FormData) => {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const rawData = Object.fromEntries(formData)
  console.log('rawData: ', rawData)
  console.log({ firstName, lastName })
}

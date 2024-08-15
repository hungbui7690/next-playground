/*
  Server Actions
  - asynchronous server functions that can be called directly from your components.
  - typical setup for server state mutations (create, update, delete)


******************************

  - endpoint on the server (api route on Next.js)
  - make request from the front-end
    -> setup form, handle submission etc

  
******************************

  🎐 Next.js server actions allow you to mutate server state directly from within a React component by defining server-side logic alongside client-side interactions.


******************************

  RSC - React Server Component
  RCC - React Client Component


******************************

  Rules :
  - must be async
  - add 'use server' in function body (only in RSC)
  - can use in RCC but only as import


******************************
******************************

  Action Page

  1. create components/Form.tsx
  2. create components/UserList.tsx
  3. create app/actions/page.tsx


******************************

  Server Actions Example 1
  - must be async
  - add 'use server' in function body (only in RSC)

      const createUser = async () => {
        'use server'
        console.log('creating user....')
      }


******************************

  Server Actions Example 2
  - or setup in a separate file ('use server' at the top)
  - can use in both (RSC and RCC)

  -> actions.ts (ie. server actions)
      'use server';
      export async function myAction() {}

  -> any client component:
      'use client';
      import { myAction } from './actions';
      export default function ClientComponent() {
        return (
          <form action={myAction}>
            <button type='submit'>Add to Cart</button>
          </form>
        );
      }


******************************

  Default Value

    <input type='text' name='firstName' required className={inputStyle}
      defaultValue='peter' 
    />  


*/

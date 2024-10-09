/*
  Server Actions
  - is the asynchronous server functions that can be called directly from your components.
    -> typical setup for server state mutations (create, update, delete)


*****************************

  - imagine that
    -> we have a DB, and we want to update something from the frontend to the DB
      # we need to setup endpoint on the server (api route on Next.js)
    -> then, make request from the front-end
      # setup form, handle submission etc


*****************************

  - In NextJS, when we submit the form, the req not go to servers somewhere else 
    -> but it will update or create everything we need in a DB directly from our component -> which is very wild
  - Next.js server actions allow you to mutate server state directly from within a React component by defining server-side logic alongside client-side interactions.


*****************************

  Rules :
  - fn must be async -> and we must set it up inside the component
    -> and the component must be "server component"
    -> MUST HAVE "use server" directive on top 

      export default function ServerComponent() {
        async function myAction(formData) {
          - 'use server'
          - access input values with formData
          - formData.get('name')
          - mutate data (server)
          - revalidate cache
        }
        return <form action={myAction}>...</form>;
      }

  - function can setup in a separate file ('use server' at the top)
    -> can use in both (RSC and RCC)
    -> with this setup (separated file) -> functions can only be exec in the client components
      + because we won't be able to setup the server action function in the client components


*****************************

  How we setup
  - action file
    -> 'use server'
    -> export async function myAction() {}

  - client component: 
    -> 'use client'
    -> import { myAction } from './actions';

        export default function ClientComponent() {
          return (
            <form action={myAction}>
              <button type='submit'>Add to Cart</button>
            </form>
          );
        }


*****************************

  TaskForm
  - this shows how to setup the server actions

    1. TaskForm.jsx

  - <input className='input input-bordered join-item w-full'
        placeholder='Type Here' type='text' name='content'
        required />
    -> there's actually no front-end checking right out of the box 
    -> adding "required" is actually very useful > to prevent user from submit the form with empty values


*****************************

  - Form -> class="join" 
    -> https://daisyui.com/components/join/


*/

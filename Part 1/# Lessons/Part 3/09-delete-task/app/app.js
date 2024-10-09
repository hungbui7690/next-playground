/*
  DeleteForm
  - will use "action" approach since it works without JS
  - invoke by using startTransition (useTransition hook)


******************************

  1. utils/actions.js 
  2. DeleteForm.jsx


******************************

  - In action.js -> we use formData to get data from client 
    -> that's why we need to have input, but hidden in the <form> -> this is used to pass ID to action.js

    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-error btn-xs'>delete</button>
    </form>


*/

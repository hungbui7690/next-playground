/*
  Server Actions - Pending State
  - const { pending, data, method, action } = useFormStatus();
    -> pending === loading


**********************************

  1. clone createTask in actions 
    -> copy and rename createTaskCustom
      # import and replace in TaskFormCustom component

  2. clone TaskForm 
    -> copy and rename TaskFormCustom
      # make it client component
      # import and replace in Tasks page


  3. tasks/page.js 
    -> import and use TaskFormCustom


**********************************

  - action.js
    -> in the function, we delay the code by 2s
    -> in the TaskFormCustom, we use {useFormStatus} hook
      # this hook comes from react-dom
      # The useFormStatus Hook provides status information of the last form submission.
      # after the setup, we can see that every time we create a new task -> the button is disabled until everything is done


**********************************

  ~~ The [useFormStatus] Hook provides status information of the last form submission.
  @@ [useFormState] is a Hook that allows you to update state based on the result of a form action.


*/

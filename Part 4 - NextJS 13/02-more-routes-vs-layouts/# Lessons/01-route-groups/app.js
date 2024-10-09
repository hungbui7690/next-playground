/*
  Route Groups
  - use to organize folder structure
  - parentheses -> (group-name)


\\\\\\\\\\\\\\\\\\\\\\\

  - without route groups:
    # app/auth/signup/page.jsx
    # app/auth/login/page.jsx
    => /auth/signup
    => /auth/login

  - route groups -> parentheses
    # app/(auth)/signup/page.jsx
    # app/(auth)/login/page.jsx
    => /signup
    => /login


\\\\\\\\\\\\\\\\\\\\\\\\

  1. create app/(auth)/
    # signup/page.jsx
    # login/page.jsx

  2. create (dashboard)/
    # move tickets/ into (dashboard)/


*/

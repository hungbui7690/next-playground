/*
  Sign In Button
  - session -> check if user is logged in or not
  - providers -> to use sign-in functionality, we need to get the provider ID ->where we want to put the login button, we have to check if the providers are loaded. If they are, we can map over them and find the Google provider. If we find it, we can render the button.


  1. components/Navbar.jsx


**************************

  - <useSession> hook -> in the NextAuth.js client is the easiest way to check if someone is signed in.
    -> https://next-auth.js.org/getting-started/client#usesession

  - <getProviders> hook -> give us a list of all the providers we have setup.
    -> https://next-auth.js.org/getting-started/client#getproviders

  - signIn()
  - signOut()


**************************

  - After setup in the Navbar -> if you click the button, you should see the Google sign in page. Do not sign in yet. We want to make sure that we save the user in the database first. We will do that in the next lesson.


*/

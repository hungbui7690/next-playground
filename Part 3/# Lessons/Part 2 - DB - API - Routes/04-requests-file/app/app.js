/*
  Create a Requests File
  - Instead of having the `fetchRequests` function defined twice in both the properties page and the homepage, let's create a file that we can import into both pages. We also don't want to have the domain `http://localhost:3000` hardcoded in the function. We can use an environment variable for that.


  1. create utils/requests.js
    -> load from process.env.NEXT_PUBLIC_DOMAIN
    -> handle in case it's null



*/

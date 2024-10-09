/*
  Google OAuth Setup
  - in the link -> we can find many provider (GG, Github...) -> in this case, we choose GG
  - Next Auth - GG  ->  https://next-auth.js.org/providers/google
    1. Configuration -> https://console.developers.google.com/apis/credentials
      # Create New Project
        $ OAuth consent screen -> Create -> Enter Emails
          -> Add or Remove Scopes -> pic
        $ Credentials -> Create OAuth client ID
    2. .env 
        # GOOGLE_CLIENT_ID=
        # GOOGLE_CLIENT_SECRET=


*************************

  Next Auth Setup
  ~~ npm install next-auth

  3. create utils/authOptions.js
  4. create /app/api/auth/[...nextauth]/route.js
    -> configure Next Auth
    -> catch-all for the /api/auth/*


*************************

  Provider Setup
  5. create components/AuthProvider.jsx
    -> https://next-auth.js.org/providers/google

  6. layout.jsx
    -> https://next-auth.js.org/getting-started/example

  7. .env
    -> NEXTAUTH_URL=http://localhost:3000
    -> NEXTAUTH_URL_INTERNAL=http://localhost:3000

  8. WSL -> generate secret -> openssl rand -base64 32
    -> NEXTAUTH_SECRET=qFTTrLM/KXXAu6Hn8Gj2oeiMFtPRHsuAFxju/otog4M=


*/

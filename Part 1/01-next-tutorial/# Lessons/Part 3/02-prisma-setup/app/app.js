/*
  Prisma
  - Sqlite: https://www.prisma.io/docs/concepts/database-connectors/sqlite


******************************

  - Prisma ORM is a database toolkit that simplifies database access in web applications. 
    -> It allows developers to interact with databases using a type-safe and auto-generated API, making database operations easier and more secure.
        # Prisma server: A standalone infrastructure component sitting on top of your database.
        # Prisma client: An auto-generated library that connects to the Prisma server and lets you read, write and stream data in your database. It is used for data access in your applications.


******************************

  - Prisma sits on top of the DB and simplifies the setup and interactions with DB
  - Right now, we will use SQLite and save DB to a file 
  - But it won't work in Prod -> later, right before we deploy our project, we will switch to SQL and host our db on planet scale


******************************

  VsCode Extension: 
  - Prisma


******************************

  Installation
  ~~ npm install prisma --save-dev
  ~~ npm install @prisma/client
  ~~ npx prisma init
    -> This creates a new prisma directory with your Prisma schema file and configures SQLite as your database. 
    -> this also install .env file -> need to put it into .gitignore
    -> You're now ready to model your data and create your database with some tables.

  
******************************

  - prisma/schema.prisma:
      datasource db {
        provider = "sqlite"
        url      = env("DATABASE_URL")
      }

  - .env -> DATABASE_URL="file:./dev.db"


******************************

  Setup Instance
  - In development, the command "next dev" clears Node.js cache on run. 
    -> This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. 
    -> This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.


  - Prisma Instance:  https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution


******************************

  1. create utils/db.ts
    -> copy code from the link above, then paste to this file


*/

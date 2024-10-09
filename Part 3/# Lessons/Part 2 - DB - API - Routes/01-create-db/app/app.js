/*
  Create Database
  - cloud.mongodb.com -> atlas -> Connect -> Connect with MongoDB Compass
    -> copy -> mongodb+srv://hungbui7690:<password>@cluster0.7lyv96o.mongodb.net/
    -> open Compass and paste the URI 
    -> pic 

  - .env -> must have <NEXT_> prefix
    -> MONGO_URI= mongodb+srv://<hungbui7690>:<password>@cluster0.7lyv96o.mongodb.net/<propertypulse>?retryWrites=true&w=majority&appName=Cluster0
    -> NEXT_PUBLIC_DOMAIN = http://localhost:3000 -> for front-end
    -> NEXT_PUBLIC_API_DOMAIN = http://localhost:3000/api -> for backend

  - app/page.jsx
    -> log process.env.MONGO_URI


    ~~ npm install mongodb mongoose


*****************************

  Compass & Import Data
  - <Compass> -> click on collection <properties>
    -> Add Data -> JSON -> use <properties_import.json> 
      ❌ must use this file since it doesn't contain _id field -> so _id field will be auto generated with the ObjectID format 
      ❌ if we use _id : "1" or so -> cast error 
          # correct format: ObjectID('66c4631c80bd9637ab40b3ca')


*****************************

  Config File
  - create config/database.js
    -> We set `strictQuery` to `true` so that Mongoose will ensure that only the fields that are specified in our schema will be saved in the database


*/

/*
  Create Models


**************************

  # User Model
  - This is a pretty simple user model. We are using Google auth, so we don't need a password field. If you wanted to add local login later you could add one. All we need is the email, username, and image. We are also adding a `bookmarks` field that will be an array of property ids.
  - We are using the `timestamps` option to automatically add `createdAt` and `updatedAt` fields to our documents.


**************************

  # Property Model
  - For the `owner` field, we are using the `ObjectId` type and referencing the `User` model. This will allow us to populate the user data when we query for properties.
  - One thing that I want to mention that may save you some headaches is that when you change your models, you need to restart your server and delete the `.next` folder in your project root. This will clear the cache and allow the server to pick up the new models.


*/

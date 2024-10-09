/*
  Course
  - Embark on a journey to mastering modern web development with our comprehensive video course on building applications using Next JS 14 and the OpenAI API. This course is meticulously designed for beginners and intermediate developers who are keen to elevate their skills. You'll start from the ground up by learning how to create a new Next.js app, understand its files and folders structure, and explore the intricacies of routing including link components, nested routes, and dynamic routes.

  - Immerse yourself in front-end design with TailwindCSS and DaisyUI, and learn to craft responsive layouts, manage themes, and create a unified look for your entire app with layout components. Dive into the backend mechanics with server vs client components, fetching data in server components, handling loading and errors gracefully, and implementing nested layouts

  - Discover how to enhance your app's functionality with CRUD operations using Server Actions, manage user interactions, and validate data using the Zod library. You'll also learn to integrate a database by hosting with Planetscale and add essential features like authentication with CLERK Service. 

  - By the end of this course, you'll be adept at deploying your NextJS application on Vercel, setting up and toggling themes with DaisyUI, and enriching your app with powerful APIs from OpenAI and Unsplash. Learn how to send prompts, receive responses, and even generate images within your application.

  - With a hands-on approach, tackle numerous challenges throughout the course to immediately apply your newfound knowledge. This is not just a tutorial; it's a transformative learning experience that will arm you with the tools and confidence to build cutting-edge web applications.


******************************

  Intro
  - NextJS allows us to build fullstack app quickly
  - In traditional react app, we need to install "react-router-dom" package + setup router
    -> but in Next, we just need to decide on the route segment 
      + setup a folder in directory

  - But the best about Next is we can build fullstack app without leaving our project
    -> we don't need to build server separately


******************************

  - latest version introduced some powerful concept:
    -> server components
    -> server actions

  - final app:  
    + https://nextjs-tutorial-production.vercel.app/


******************************

  Create New NextJS App
  - The minimum Node.js version has been bumped from 16.14 to 18.17, since 16.x has reached end-of-life.
    ~~ npx create-next-app@latest
    ~~ npx create-next-app@latest [project-name]
      √ Would you like to use TypeScript? ... No
      √ Would you like to use ESLint? ... No 
      √ Would you like to use Tailwind CSS? ... Yes
      √ Would you like to use `src/` directory? ... No 
      √ Would you like to use App Router? (recommended) ... Yes
      √ Would you like to customize the default import alias (@/*)? ... No
  - https://nextjs.org/docs/getting-started/installation


******************************

  Folder Structure
  - app folder -> where we will spend most of our time
    -> setup routes, layouts, loading states, etc
  - node_modules -> project dependencies
  - public -> static assets
  - .gitignore -> sets which will be ignored by source control
  - bunch of config files (will discuss as we go)
    -> since we use tailwind -> we have postcss.config.mjs
  - in package.json -> scripts


******************************

  - to start project:
    ~~ npm run dev 
      + to spin up the project on http://localhost:3000


*/

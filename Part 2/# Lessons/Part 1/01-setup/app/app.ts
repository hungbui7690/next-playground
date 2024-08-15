/*
  Installation
  ~~ npx create-next-app@latest playground
      √ Would you like to use TypeScript? ... No / <Yes>
      √ Would you like to use ESLint? ... No / <Yes>
      √ Would you like to use Tailwind CSS? ... No / <Yes>
      √ Would you like to use `src/` directory? ... <No> / Yes
      √ Would you like to use App Router? (recommended) ... No / <Yes>
      √ Would you like to customize the default import alias (@/*)? ... <No> / Yes


****************************

  - package.json

      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
      },

    ~~ npm run dev

****************************

  - app/global.css -> remove everything after directives

      @tailwind base;
      @tailwind components;
      @tailwind utilities;


****************************

  Folder Structure
  - app folder -> where we will spend most of our time
    -> setup routes, layouts, loading states, etc
  - node_modules -> project dependencies
  - public - static assets
  - .gitignore -> sets which will be ignored by source control
  - bunch of config files (will discuss as we go)
  - in package.json look scripts
  - 'npm run dev' to spin up the project on http://localhost:3000


*/

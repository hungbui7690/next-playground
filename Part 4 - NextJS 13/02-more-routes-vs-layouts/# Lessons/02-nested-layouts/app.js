/*
  Nested Layouts
  - currently, we have a single layout with a navbar
  - if we want to have multiple layouts for different pages, we can create multiple layout files
  - or if we want to have additional components in the layout, we can create a new nested layout file

  🍡 Not only Navbar -> but we can also customize the <Font> for different pages


\\\\\\\\\\\\\\\\\\\\\\\\\

  1. app/layout.jsx
    -> remove <Navbar /> -> since we don't want to have <Navbar /> in home page
  2. create app/(dashboard)/layout.jsx
  3. create app/(auth)/layout.jsx

  => after this setup, we will have different Navbar for different route groups


*/

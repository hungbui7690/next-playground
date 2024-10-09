
## Tailwind & Global Styles

Notice that we lost our Tailwind styles. This is because we deleted the `globals.css` file.

Let's create a folder in the root called `assets` and in that folder, create a folder called `styles` and then create a file called `globals.css`. This is where we'll put our global styles. We'll also import Tailwind here.

Add the following to the `globals.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now we just need to import it into our layout component. So add the following to the `layout.jsx` file:

```jsx
import '@/assets/styles/globals.css';
```

Notice we used the `@` symbol. This is a special alias that Next.js uses to refer to the root of the project.

Now Tailwind should be working again.

## Metadata

Right now, we don't have a page title or any metadata. We can add any meta tags that we want by just exporting a `metadata` object from the layout.

In your `layout.jsx` file, add the following right under the globals.css import:

```jsx
export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
};
```

Now if you view the source of the page, you should see the title and description in the `<head>` section.

If you want to add a specific title or meta tag to a page, just export the `metadata` object from that page component. It will override the global metadata.

Alright, so we have our layout component and our homepage component. In the next video we will go over how file-based routing works in Next.js.

## Extra Attributes Error

You may see something like this - `app-index.js:34 Warning: Extra attributes from the server: cz-shortcut-listen,style`. This is usually from using a browser extension that modifies the DOM so it no longer matches the server-rendered content. Most of mine comes from the LastPass extension. You can just ignore this. It's just a warning and does not matter for production.

## Commit Your Code

At this point, you should make sure that you initialize a Git repository and commit your code. There is already a `.gitignore` file that has all of the files and folders that you do not want to commit.

#### Add `.env` to `.gitignore`

Open your `.gitignore` file and add `.env` to the bottom of the file. This will prevent your `.env` file from being committed to the repo. This is important because you don't want to expose your secrets to the public.

You can do this from the command line or from VS Code. I prefer to do it from the command line.

```bash
git init
git add .
git commit -m 'Layout and homepage components'
```

You can push to a remote repo like Github or Gitlab if you want, but I'm just going to keep it local for now.

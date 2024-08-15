/*
  Remote Images
  - To use a remote image, the src property should be a URL string.
  - Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually.
  - The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file.


*******************************

  1. tours/[id]/page.js
    -> Error: Invalid src prop (https://images.pexels.com/photos/4905089/pexels-photo-4905089.jpeg) on `next/image`, hostname "images.pexels.com" is not configured under images in your `next.config.js`

  2. next.config.mjs 
    -> must have this -> otherwise, error



*/

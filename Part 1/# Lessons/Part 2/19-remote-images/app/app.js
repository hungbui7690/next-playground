/*
  Remote Images
  - To use a remote image, the src property should be a URL string.
    -> Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually. -> this is the "placeholder"


***************************

  - The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file.
  - To safely allow optimizing images, define a list of supported URL patterns in next.config.js. Be as specific as possible to prevent malicious usage.


***************************

  - restart dev server in order to make the latest changes take place
  - priority property to prioritize the image for loading


***************************

  - Example: 
      <Image src={imgSrc} className='w-48 h-48 rounded shadow-lg mb-4'
        width={300}
        height={300}
        priority/>

    
***************************

  1. drinks/[id]/page.js
  3. next.config.mjs
    - image url: https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg
    - config:
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.thecocktaildb.com',
              port: '',
              pathname: '/images/**',
            },
          ],
        },


***************************

  🎈 if we check the Element tab > we can see that NextJS prepares some versions for our image for browser to pick depends on particular viewport

  - we also see the benefit of caching of NextJS 
    -> first time, it takes some time to load
    -> but second time, it doesn't take time to load that same image


*/

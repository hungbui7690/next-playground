/*
  Google Profile Image
  1. components/Navbar.jsx
    -> try to log <session>

    {
      expire: "2024-xx-xxTxx:xx:xx.xxxZ"
      user: {
        email: "your@email.com",
        id: "xxxxxxxxxxxxxxxxxxxxxxxx",
        image: "https://lh3.googleusercontent.com/xxx",
        name: "Your Name"
      }
    }


*****************************

  2. next.config.js 
    -> Next Remote Image -> https://nextjs.org/docs/pages/building-your-application/optimizing/images
    -> In order to use the image, we need to add the domain to the config object <images.remotePatterns> array
    -> https://lh3.googleusercontent.com/a/ACg8ocIEtosMYHoeFvHg17aS8GOCbkufnDSQeFHRftMg4bJ1cmPIl4I=s96-c

      const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              pathname: '**',
            },
          ],
        },
      };


*****************************

  Another Example: 
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />

    protocol: 'https',
    hostname: 's3.amazonaws.com',
    port: '',
    pathname: '/my-bucket/**',


*/

/*
  Next Image Component (Local Image)
  - get random image from pexels site
  - Random Image : https://www.pexels.com/photo/assorted-map-pieces-2859169/ -> download the largest size


*********************************

  - The Next.js Image component extends the HTML <img> element with features for automatic image optimization:
    -> Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
    -> Visual Stability: Prevent layout shift automatically when images are loading.
    -> Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
    -> Asset Flexibility: On-demand image resizing, even for images stored on remote servers


*********************************

  - Network tab -> disable cache
  - width and height -> placeholder
      width={192}
      height={192}


*********************************

  - priority property to prioritize the image for loading
    -> When true, the image will be considered high priority and preload.

    <Image src={mapsImg}
        alt='maps'
        width={192}
        height={192}
        className='w-48 h-48 object-cover rounded'
        priority={true}
    />


*********************************

  1. create root/images/map.jpg
  2. tours/[id]/page.tsx


*/

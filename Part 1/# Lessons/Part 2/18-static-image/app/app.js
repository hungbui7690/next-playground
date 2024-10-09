/*
  Next Image Component
  - get any image from pexels
    -> Random Drink: https://www.pexels.com/photo/red-glass-with-garnished-beverage-2842876/
      # download the biggest image


**********************************
  
  - The Next.js Image component extends the HTML <img> element with features for automatic image optimization:
    + Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
    + Visual Stability: Prevent layout shift automatically when images are loading.
    + Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
    + Asset Flexibility: On-demand image resizing, even for images stored on remote servers


**********************************

  1. drinks[id]/page.js


**********************************

  - this is static image
    -> though we load a big image -> it loads really fast (Faster Page Loads) -> it also keeps the placeholder for us (Visual Stability)
    -> if we check the img in Elements tab -> we see the size of image is reduced (from 2.5Mb to 651kb)
      + and the attribute "lazy load" is added to it


*/

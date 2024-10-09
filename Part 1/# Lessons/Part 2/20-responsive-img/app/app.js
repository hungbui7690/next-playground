/*
  Responsive
  - The "fill" prop allows your image to be sized by its parent element
  - sizes property helps the browser select the most appropriate image size to load based on the user's device and screen size, improving website performance and user experience.


*********************************

  1. DrinksList.jsx


*********************************

  <div className='relative h-48 mb-4'>
    <Image src={drink.strDrinkThumb}
      fill
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
      className='rounded-md object-cover'
    />
  </div>

  - to use the "fill" prop -> we must have the parent 
    -> in this case, the parent is the <div> (block element) -> and parent must have "relative"


*/

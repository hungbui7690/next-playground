/*
  File-Based Routing
  - https://nextjs.org/docs/app/building-your-application/routing

    /properties 
    -> create app/properties/page.jsx

    /properties/add
    -> create app/properties/add/page.jsx

    /properties/add/1
    -> create app/properties/add/[id]/page.jsx

    /properties/add/1/rooms
    /properties/add/1/rooms/beds
    -> the above [id] won't work in this case 
    -> we need to use catch-all to catch all segments below /1
    -> create app/properties/add/[...id]/page.jsx


***************************

  Link Component 
  - <a> for link -> when we click on -> we see the page load 
    -> use Link for more performant


*/

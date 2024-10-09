/*
  Render 
  - pic

****************************

  Planet Scale
  - pic
  - Host DB
    -> https://planetscale.com/

  ~~ npx prisma db push


****************************

  Local Build
  - pic
  - "build" : "npx prisma generate && next build"

  1. clean out db 
  2. npm run build


****************************

  Force Dynamic
  - now, if we clean everything -> build -> run again 
    -> everything is working fine 

  - if we add 1st task -> it's ok 
  - if we add 2nd task -> it's in the DB, but not sync with the UI 
  - if we add 3rd task -> it's going back to normal 
  - if we delete all tasks -> reload -> 1st task still in the UI 

  => when we build -> /api/tasks is dynamic -> but /tasks is static 
  => if we check action.js -> we have the revalidate as well -> it is just some kind of glitch
  => to fix that 
    1. app/tasks.js -> add force dynamic
    2. build again


****************************

  Deploy to Vercel
  - pic


*/

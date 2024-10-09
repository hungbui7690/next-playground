/*
  Loading UI & Suspense
  - https://nextjs.org/docs/13/app/building-your-application/routing/loading-ui-and-streaming

  1. create app/loading.jsx
  2. /tickets/TicketList.jsx
  3. /tickets/[id]/page.jsx
  4. /tickets/page.jsx
    -> we have the Ticket Navbar 
    -> also have the Ticket List
    -> while loading, we still want to show the Ticket Navbar -> use suspense on the <TicketList>
      # <Suspense>
          <TicketList />
        </Suspense>


*/

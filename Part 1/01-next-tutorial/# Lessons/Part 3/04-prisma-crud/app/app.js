/*
  Prisma CRUD
  - CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
  - we will create task + get all tasks in this lesson


*******************************

  - Navbar: change the links from "query" to "prisma"
    -> components/Navbar.js


*******************************

  1. prisma-example/page.js


*******************************

  ~~ Create Single Record
      const task = await prisma.task.create({
        data: {
          content: 'some task',
        },
      })

  ~~ Get All Records
      const tasks = await prisma.task.findMany();

  ~~ Get record by ID or unique identifier
      const user = await prisma.user.findUnique({
        where: {
          email: 'elsa@prisma.io',
        },
      })

      const task = await prisma.task.findUnique({
        where: {
          id: id,
        },
      })

  ~~ Update Record
      const updateTask = await prisma.task.update({
        where: {
          id: id,
        },
        data: {
          content: 'updated task',
        },
      })

  ~~ Upsert -> Update or create records -> if record appears, then update -> else, insert
      const upsertTask = await prisma.task.upsert({
        where: {
          id: id,
        },
        update: {
          content: 'some value',
        },
        create: {
          content: 'some value',
        },
      })

  ~~ Delete a single record
      const deleteTask = await prisma.task.delete({
        where: {
          id: id,
        },
      })


*/

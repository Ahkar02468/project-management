### Install Dev Dependency 
* pnpm i -D ts-node typescript @types/node rimraf concurrently nodemon @types/cors @types/express @types/morgan @types/node
* npx tsc --init (setup tsc compiler)

### Install Dependencies
* pnpm i prisma @prisma/client express body-parser cors dotenv helmet morgan

### prisma
* pnpm dlx prisma generate => to connect with prisma and generate model to access related table and CRUD method
* pnpm dlx prisma migrate dev --name init => to create migration
* pnpm dlx prisma migrate reset => to rollback to initial state
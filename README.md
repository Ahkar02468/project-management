# 🎉Project Management Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project is designed for managing various projects efficiently with a user-friendly interface. It provides features for creating, editing, and managing projects, tasks, and users. Priority levels are also included to help you manage tasks effectively. Tags are also included to help you manage tasks effectively.

![Home Page](https://github.com/Ahkar02468/project-management/blob/main/client/public/Screenshot%202024-10-30%20035341.png)
![PJ Page](https://github.com/Ahkar02468/project-management/blob/main/client/public/Screenshot%202024-10-30%20035409.png)

## 🗺️Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Getting Started

To get started with this project, follow the instructions below to set up your development environment.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ahkar02468/project-management.git
   cd project-management
   ```

   Navigate to the client and server directory and install the required packages:
   ```
   cd client
   npm install

   cd server
   npm install
   ```

   ### Client Dependencies:
   ```
   npm i @mui/material @emotion/react @emotion/styled lucide-react numeral date-fns axios recharts react-dnd react-dnd-html5-backend gantt-task-react @mui/x-data-grid react-redux @reduxjs/toolkit redux-persist dotenv
   ```
   ### Server Dependencies:
   ```
   npm i prisma @prisma/client express body-parser cors dotenv helmet morgan
   ```
   ### Dev dependencies for the server:
   ```
   npm i -D ts-node typescript @types/node rimraf concurrently nodemon @types/cors @types/express @types/morgan
   ```
### Development
2. To run the development server for the client, navigate to the client directory => To run the server, navigate to the server directory and execute:

   ```npm run dev```

###  Environment Variables
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:xxxx
NEXT_PUBLIC_COGNITO_USER_POOL_ID="xxxxxxxxxxxxx"
NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID="xxxxxxxxxxxxx"
```

 Create a .env file in the server directory and add the following environment variables:
     
```
DATABASE_URL="postgresql://<username>:<password>@<local or cloud>/<dbname>?schema=public"
PORT=xxxx
```
Set up the database:
   `npx prisma generate`
   `npx prisma migrate dev --name init`
   `npm run seed`

### Deployment

To deploy this project, you can use various hosting platforms like Vercel, Netlify, or AWS. This project is deployed on AWS. By using -
* AWS Amplify
* AWS Cognito
* AWS S3
* AWS RDS
* AWS EC2
* AWS VPC (Virtual Private Cloud)


### Technologies Used
**Frontend**: Next.js, React, Material-UI, Tailwind CSS

**Backend**: Node.js, Express, Prisma, PostgreSQL

**State Management**: Redux Toolkit

**Others**: Recharts, React DnD

# Student Classroom
Apollo Server with GraphQL and PostgreSQL Sample App

**Technology Used:**\
[Apollo Server](https://www.apollographql.com/docs/apollo-server/)\
[GraphQL](https://graphql.org/)\
[PostgreSQL](https://www.postgresql.org/)\
[React](https://reactjs.org/)\
[NodeJS](https://nodejs.org/)

**UI Library:**\
[Material UI](https://material-ui.com/)

**Minimum Requirement:**\
Node 8+\
NPM 6+

Please follow below mentioned step to run this project:

- Clone the repo
```shell
https://github.com/hemgoyal/student-classroom
```

- Install and start `PostgreSQL` DBMS and create a database with the details in the `.env`:
```sql
CREATE DATABASE classroom;
CREATE USER classroom;
GRANT ALL PRIVILEGES ON DATABASE members TO postgres;
```

- Edit the `server/.env` with the following settings:

  ```dosini
  PORT=3000
  DATABASE=classroom
  DATABASE_USER=classroom
  DATABASE_PASSWORD=postgres
  ```

- Run `npm install` in both server and client folder.

- Follow below commands to start development server:
  - In server folder:
  ```shell
  npm run dev
  ```
  - In client folder:
  ```shell
  npm start
  ```

Backend server will start on http://localhost:4000\
Client server will start on http://localhost:3000

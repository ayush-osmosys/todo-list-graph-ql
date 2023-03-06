# TODO LIST GRAPHQL

## Backend for basic CRUD app using GraphQL API

### Set up  

create a file for your environment setup named **.env**  
CREATE THE FOLLOWING VARIABLES AND SPECIFY THEIR VALUES AS OR AS YOUVE CONFIGURED LOCALLY  
>PORT=5000  
>PGPORT=5423  
>PGUSER=postgres  
>PGPASSWORD=""  
>PGHOST=localhost  
>PGDATABASE=*todo_database*  

The app queries data from PostgreSQL database *todo_database* that has a table *task_table* that stores the task  
the *task* resource has the following fields:  

- task_id SERIAL PRIMARY KEY
- task_name VARCHAR
- description VARCHAR
- status VARCHAR default in_progress

make sure that your PostgreSQL database is up and running and it has the table named *task_table* as specified

```bash
git clone https://github.com/ayush-osmosys/todo-list-graphql
cd todo-list-graphql
npm i
npm run dev
```

The express server will start on *PORT* 5000 or as specified by you in .env

Based on *task* resource, you can check out the documentation once you open <http://localhost:*PORT>* om apollo server

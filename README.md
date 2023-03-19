# todo-nodejs-app


A barebones Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/Kairkhan/todo-nodejs-app.git # or clone your own fork
$ cd todo-nodejs-app
$ npm install
$ npm start
```

Start a postgres instance

```console
$ docker run --name todoapp -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=todoapp -d postgres
```

Create table `tasks`
```sql
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL,
    title varchar,
    description varchar,
    status varchar
    );
```
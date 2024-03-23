/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api!' });
});

interface Todo {
  title: string;
}

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

app.get('/api/todos', (req, res) => {
  res.send(todos);
});

app.post('/api/addTodo', (req, res) => {
  const newTodo = {
    title: `New todo ${Math.floor(Math.random() * 1000)}`,
  };
  todos.push(newTodo);
  res.send(newTodo);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

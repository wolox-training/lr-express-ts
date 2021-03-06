import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getUsers, getUserById } from './controllers/users';
import { getTodos } from './controllers/todos';
import { getCards, getBasic } from './controllers/carts';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/users', getUsers);
  // app.post('/users', createUser);
  app.get('/users/:id', getUserById);
  app.get('/todos', getTodos);
  app.get('/cards', getCards);
  app.get('/info', getBasic);
};

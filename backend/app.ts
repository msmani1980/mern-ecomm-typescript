import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { initDatabase } from './config/db';

import userRoute from './routes/user.route';

const app: Application = express();

initDatabase();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ message: 'API ONLINE' });
});

app.use('/api/users', userRoute);

export default app;

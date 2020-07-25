import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:57017/mern-ecomm', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export function initDatabase(): void {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected ');
  });
}

export default db;

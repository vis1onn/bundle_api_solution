import express, { NextFunction, Request, Response } from 'express';

import bundleRoutes from './routes/bundle';

const app = express();

app.use('/bundle', bundleRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something broke!' });
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});

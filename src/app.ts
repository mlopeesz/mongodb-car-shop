import express from 'express';
import carRoutes from './routes/car';

const app = express();
app.use(carRoutes);

export default app;

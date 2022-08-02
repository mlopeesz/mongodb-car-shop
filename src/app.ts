import express from 'express';
import errorHandler from './middlewares/error';
import carRoutes from './routes/car';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use(errorHandler);

export default app;

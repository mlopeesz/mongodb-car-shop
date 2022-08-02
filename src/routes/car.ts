import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/', carController.create);
route.get('/', carController.read);
route.get('/:id', carController.readOne);
route.delete('/:id', carController.delete);

export default route;
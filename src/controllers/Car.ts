import { NextFunction, Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarController {
  constructor(private _service: IService<ICar>) {
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createdCar = await this._service.create(req.body);
      return res.status(201).json(createdCar);
    } catch (error) {
      next(error);
    } 
  }

  public async read(_req: Request, res: Response, next: NextFunction) {
    try {
      const cars = await this._service.read();
      return res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  }

  public async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const car = await this._service.readOne(req.params.id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const car = await this._service.delete(req.params.id);
      return res.status(204).json(car);
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;
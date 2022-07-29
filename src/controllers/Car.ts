import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarController {
  constructor(private _service: IService<ICar>) {
    this.read = this.read.bind(this);
  }

  public async read(_req: Request, res: Response) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }
}

export default CarController;
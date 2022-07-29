import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  
  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async read() {
    const cars = await this._car.read();
    return cars;
  }
}

export default CarService;
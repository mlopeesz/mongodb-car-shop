import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _model: IModel<ICar>;
  
  constructor(model: IModel<ICar>) {
    this._model = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    return this._model.create(obj);
  }

  public async read() {
    const cars = await this._model.read();
    return cars;
  }
}

export default CarService;
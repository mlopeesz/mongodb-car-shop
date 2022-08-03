import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { allCarsMock, carMock, carMockWithId } from '../mocks/carMock';
import CarModel from '../../../models/Car';
const { expect } = chai;

describe('Car / Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(allCarsMock);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Criando um carro', () => {
    it('Criado com sucesso', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.equal(carMockWithId);
    })
  })

  describe('Buscando todos os carros', () => {
    it('Encontrado com sucesso', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.equal(allCarsMock);
    })
  })

  describe('Buscando um único carro por ID', () => {
    it('Encontrado com sucesso', async () => {
      const car = await carModel.readOne('95f6e4df4763aa1803223501');
      expect(car).to.be.equal(carMockWithId);
    })

    it('Carro não encontrado', async () => {
      try {
        await carModel.readOne('jubira');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
     });
  })
});
import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { allCarsMock, carMock, carMockWithId } from '../mocks/carMock';
const { expect } = chai;

describe('Car / Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(allCarsMock);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Criando um carro', () => {
    it('Criado com sucesso', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    })
  })

  describe('Buscando todos os carros', () => {
    it('Encontrado com sucesso', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal(allCarsMock);
    })
  })

  describe('Buscando um único carro por ID', () => {
    it('Encontrado com sucesso', async () => {
      const car = await carService.readOne('95f6e4df4763aa1803223501');
      expect(car).to.be.deep.equal(carMockWithId);
    })
  })
});
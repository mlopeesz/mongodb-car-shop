import * as chai from 'chai';
const { expect } = chai;
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { allCarsMock, carMock, carMockWithId } from '../mocks/carMock';
import CarController from '../../../controllers/Car';
import CarService from '../../../services/Car';
import CarModel from '../../../models/Car';

describe('Car / Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarsMock);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Criando um carro', () => {
    it('Criado com sucesso', async () => {
      req.body = carMock;
      await carController.create(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('Buscando todos os carros', () => {
    it('Encontrado com sucesso', async () => {
      await carController.read(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCarsMock)).to.be.true;
    });
  });

  describe('Buscando um único carro por ID', () => {
    it('Encontrado com sucesso', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
});

import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response, NextFunction } from 'express';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMock, returnCarMockId, returnAllCarMock } from '../../mocks/Mocks';

describe('Controlador de carro de teste', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    sinon.stub(carService, 'create').resolves(returnCarMockId);

    sinon.stub(carService, 'readOne').resolves(returnCarMockId);

    sinon.stub(carService, 'read').resolves(returnAllCarMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })
  
  describe('Teste encontrar todos os carros', () => {
    it('O sucesso do teste encontra todos os carros no controlador', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(returnCarMockId)).to.be.true;
    });
  });
  
  
  describe('Testar encontrar carro por ID', () => {
    it('Sucesso do teste encontrar carro no controlador', async () => {
      req.params = { id: returnCarMockId._id };
      await carController.readOne(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(returnCarMockId)).to.be.true;
    });
  });
  
  describe('Teste criar carro', () => {
    it('O sucesso do teste cria o carro no controlador', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(returnCarMockId)).to.be.true;
    });
  });
  
});
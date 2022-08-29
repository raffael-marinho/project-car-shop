import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, returnCarMockId, returnAllCarMock } from '../../mocks/Mocks'

describe('Testa Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(returnCarMockId);
    sinon.stub(Model, 'findOne').resolves(returnCarMockId);
    sinon.stub(Model, 'find').resolves(returnAllCarMock);
  });

  after(() => {
    sinon.restore();
  });
  
  describe('Testar encontrar carro por ID', () => {
    it('Sucesso do teste encontrar carro no model', async () => {
      const getCarById = await carModel.readOne(returnCarMockId._id);
      expect(getCarById).to.be.deep.equal(returnCarMockId);
    });
  });
  
  describe('Teste criar carro', () => {
    it('O sucesso do teste cria o carro no model', async () => {
      const createCar = await carModel.create(carMock);
      expect(createCar).to.be.deep.equal(returnCarMockId);
    });
  });

  describe('Teste encontrar todos os carros', () => {
    it('O teste encontra todos os carros no model', async () => {
      const getAllCars = await carModel.read();
      expect(getAllCars).to.be.deep.equal([returnCarMockId]);
    });
  });
});
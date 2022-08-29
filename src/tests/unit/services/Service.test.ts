import * as sinon from 'sinon';
import { expect } from 'chai';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, returnCarMockId, returnAllCarMock } from '../../mocks/Mocks'

describe('Service de carro de teste', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(returnCarMockId);

    sinon.stub(carModel, 'readOne').onCall(0).resolves(returnCarMockId);

    sinon.stub(carModel, 'read').onCall(0).resolves(returnAllCarMock);

	})
	after(() => {
		sinon.restore()
	})

	describe('Teste encontrar todos os carros', () => {
		it('Sucesso no teste, encontre todos os carros em Service', async () => {
			const getAllCars = await carService.read();
			expect(getAllCars).to.be.deep.equal([returnCarMockId]);
		});
	});
	
  describe('Testar encontrar carro por ID', () => {
		it('Sucesso no teste encontrar carro no Service', async () => {
			const getCarById = await carService.readOne(returnCarMockId._id);
      expect(getCarById).to.be.deep.equal(returnCarMockId);
    });
  });
	
	describe('Teste criar carro', () => {
		it('O sucesso do teste cria o carro no service', async () => {
			const createCar = await carService.create(carMock);
			expect(createCar).to.be.deep.equal(returnCarMockId);
		});
	});
	
});
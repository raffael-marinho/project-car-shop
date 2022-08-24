import * as sinon from "sinon";
import chai from "chai";
import { Model } from "mongoose";
import { validCar } from "../../mocks/Mocks";
import Car from "../../../models/CarModel";
const { expect } = chai;

const carModel = new Car();

describe("1 - Car Model", () => {
  before(async () => {
    sinon.stub(Model, 'create').resolves(validCar);
  });

  after(() => {
    sinon.restore();
  });

  describe('1.1 - Create', () => {
    it('Cria carro com sucesso', async () => {
      const newCar = await carModel.create(validCar);
      expect(newCar).to.be.deep.equal(validCar);
    })
  })
});
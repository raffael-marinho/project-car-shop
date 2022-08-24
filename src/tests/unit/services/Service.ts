import * as sinon from "sinon";
import chai from "chai";
import request from "supertest";
import { validCar } from "../../mocks/Mocks";
import CarServices from "../../../services/CarService";
import app from "../../../app";
const { expect } = chai;

const carService = new CarServices();

describe("2 - Car service", () => {
  before(async () => {
    sinon.stub().resolves();
  });

  after(() => {
    sinon.restore();
  });

  describe('2.1 - Erro ao enviar payload {}', async () => {
    const newCar = await carService.add(validCar);

    expect(newCar).to.be.deep.equal(validCar);
  })
});
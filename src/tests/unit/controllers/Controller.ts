import * as sinon from "sinon";
import chai from "chai";
import request from "supertest";
import { validCar } from "../../mocks/Mocks";
import CarServices from "../../../services/CarService";
import app from "../../../app";
import CarController from "../../../controllers/CarController";
const { expect } = chai;

const carController = new CarController();

describe("2 - Car service", () => {
  before(async () => {
    sinon.stub().resolves();
  });

  after(() => {
    sinon.restore();
  });

  describe('2.1 - Erro ao enviar payload {}', async () => {
    const requestResponse = await request(app).post('/cars').send(validCar);

    expect(requestResponse.statusCode).to.be.deep.equal(200);
  })
});
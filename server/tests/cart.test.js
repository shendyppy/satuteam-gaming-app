const app = require("../app");
const request = require("supertest");

const { Cart } = require("../models");

describe("Testing cart route", () => {
	describe("GET /carts [CASE FAILED]", () => {
		test("Should return carts list, status: 500", (done) => {
			request(app)
				.get("/carts")
				.set("Accept", "application/json")
				.then((response) => {
					expect(response.status).toBe(500);
					done();
				})
				.catch((err) => done(err));
		});
	});
});

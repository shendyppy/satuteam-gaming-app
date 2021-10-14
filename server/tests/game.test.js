const app = require("../app");
const request = require("supertest");

const { Game } = require("../models");

describe("Testing game route", () => {
	describe("GET /games [CASE FAILED]", () => {
		test("Should return games list, status: 500", (done) => {
			request(app)
				.get("/games")
				.set("Accept", "application/json")
				.then((response) => {
					expect(response.status).toBe(500);
					done();
				})
				.catch((err) => done(err));
		});
	});
});

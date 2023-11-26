const { Game } = require("../models");

class GameController {
	static async get(req, res) {
		try {
			const output = await Game.findAll({ order: [[`updatedAt`, `DESC`]] });

			res.status(200).json(output);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async getByID(req, res) {
		const id = +req.params.id;
		try {
			const found = await Game.findByPk(id);

			res.status(200).json(found);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async post(req, res) {
		try {
			const { name, description, price, cover, steamLink } = req.body;
			const data = {
				name: name,
				description: description,
				price: price,
				cover: cover,
				steamLink: steamLink,
			};
			const output = await Game.create(data);
			res.status(201).json(output);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async put(req, res) {
		try {
			const id = +req.params.id;
			const { name, description, price, cover, steamLink } = req.body;
			const data = {
				name: name,
				description: description,
				price: price,
				cover: cover,
				steamLink: steamLink,
			};
			const found = await Game.findByPk(id);

			const output = await Game.update(data, {
				where: { id },
				returning: true,
			});

			if (output[0] === 0) {
				throw new Error();
			}
			res.status(200).json(output[1][0]);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async delete(req, res) {
		const id = +req.params.id;
		try {
			const found = await Game.findByPk(id);

			await Game.destroy({
				where: { id: id },
			});
			res.status(200).json({ message: "Game has been successfully deleted" });
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

module.exports = GameController;

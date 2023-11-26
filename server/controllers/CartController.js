const { Cart } = require("../models");

class CartController {
	static async get(req, res) {
		try {
			const output = await Cart.findAll();

			res.status(200).json(output);
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
			const output = await Cart.create(data);
			res.status(201).json(output);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async delete(req, res) {
		const id = +req.params.id;
		try {
			const found = await Cart.findByPk(id);

			await Cart.destroy({
				where: { id: id },
			});
			res.status(200).json({ message: "Cart has been successfully deleted" });
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

module.exports = CartController;

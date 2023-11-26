"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Carts",
			[
				{
					name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
					cover:
						"https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1587582005",
					price: 109999,
					description:
						"PLAYERUNKNOWN'S BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival.",
					steamLink:
						"https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Counter-Strike: Global Offensive",
					description:
						"Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.",
					cover:
						"https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1585696022",
					steamLink:
						"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
					price: 215999,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "NARAKA: BLADEPOINT",
					description:
						"NARAKA: BLADEPOINT is a 60-player action combat offering players insane mobility!",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1203220/header.jpg?t=1632317911",
					price: 220000,
					steamLink:
						"https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Carts", null, {});
	},
};

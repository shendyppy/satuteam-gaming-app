"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Games",
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
					name: "Rocket League",
					cover:
						"https://steamcdn-a.akamaihd.net/steam/apps/252950/header_alt_assets_11.jpg?t=1585155609",
					price: 135999,
					description:
						"Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
					steamLink: "https://store.steampowered.com/app/252950/Rocket_League/",
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
				{
					name: "Battlefield V",
					description: "This is the ultimate Battlefield V experience.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg?t=1629830833",
					price: 569000,
					steamLink:
						"https://store.steampowered.com/app/1238810/Battlefield_V/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Battlefield™ 2042",
					description:
						"Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg?t=1633525745",
					price: 659000,
					steamLink:
						"https://store.steampowered.com/app/1517290/Battlefield_2042/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Legion TD 2 - Multiplayer Tower Defense",
					description:
						"An infinitely replayable multiplayer and single-player tower defense.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/469600/header.jpg?t=1633549891",
					price: 108999,
					steamLink:
						"https://store.steampowered.com/app/469600/Legion_TD_2__Multiplayer_Tower_Defense/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "FIFA 22",
					description:
						"Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1633113405",
					price: 659000,
					steamLink: "https://store.steampowered.com/app/1506830/FIFA_22/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "New World",
					description:
						"Explore a thrilling, open-world MMO filled with danger and opportunity where you'll forge a new destiny on the supernatural island of Aeternum.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1063730/header.jpg?t=1632842444",
					price: 249999,
					steamLink: "https://store.steampowered.com/app/1063730/New_World/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Football Manager 2022",
					description:
						"FM22 brings new, progressive ways to find your winning edge, instil your footballing style and earn it for the fans.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/1569040/header.jpg?t=1631199793",
					price: 549999,
					steamLink:
						"https://store.steampowered.com/app/1569040/Football_Manager_2022/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Tribes of Midgard",
					description:
						"The Giants are coming! Form a tribe with up to 10 players to defend your village from the relentless onslaught of deadly spirits and gigantic brutes.",
					cover:
						"https://cdn.akamai.steamstatic.com/steam/apps/858820/header.jpg?t=1633442282",
					price: "135999",
					steamLink:
						"https://store.steampowered.com/app/858820/Tribes_of_Midgard/",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Games", null, {});
	},
};

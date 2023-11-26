import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Tabs } from 'antd';

import Chart from "../components/Chart";
import Error from "../components/Error";

// import Loading from "../components/Loading";
import GameCard from "../components/GameCard";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import Table from "../components/Table";
import NoDataFound from "../components/NoDataFound";
import { fetchGames } from "../stores/games/action";
import games from "../seeders/db/games.json";

const { TabPane } = Tabs;

function Home() {
	const dispatch = useDispatch();
	const [game, setGame] = useState("");
	const [price, setPrice] = useState(0);
	const [tabsValue, setTabsValue] = useState(1);

	// const { games, loadingFetch, error } = useSelector((state) => state.games);

	const onChangeTabs = (e) => {
		setTabsValue(Number(e))
	}

	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	useEffect(() => {
		if (!games) {
			return <NoDataFound />;
		} else {
			let gamesName = games.games.map((game) => {
				return game.name;
			});

			let gamesPrice = games.games.map((game) => {
				return Number(game.price);
			});

			setGame(gamesName);
			setPrice(gamesPrice);
		}
	}, []);

	return (
		<>
			{!games && <Error />}
			{/* {loadingFetch && <Loading />} */}

			{game.length === 0 ? (
				<NoDataFound />
			) : (
				<>
					<div style={{ alignItems: "center", justifyContent: "center" }}>
						<div style={{ alignItems: "center", justifyContent: "center" }}>
							<h1 className="text-center text-3xl font-bold mt-10">
								Differential Price
							</h1>

							<div className="container mx-auto text-center mt-10 mb-10">
								<Chart game={game} price={price} />
							</div>
						</div>

						<div style={{ alignItems: "center", justifyContent: "center" }}>
							<h1 className="text-center text-3xl font-bold mt-10">
								List Game With Price
							</h1>
							<div className="container mx-auto text-center mt-10 mb-10">
								<div className="container mx-auto text-center mt-10">
									<div
										className="card ml-14 mr-14 shadow-xl"
										style={{
											backgroundColor: "#c7d5e0",
											borderWidth: 2,
											borderColor: "#2a475e",
										}}
									>
										<div className="m-8">
											<div className="overflow-auto">
												<Tabs onChange={(e) => onChangeTabs(e)}>
													<TabPane
														tab={
															<p>Default</p>
														}
														key={1}
													>
														{tabsValue === 1 && (
															<>
																<table
																	className="table-auto m-2 mx-auto"
																	style={{
																		alignItems: "center",
																		justifyContent: "center",
																		minWidth: "95%",
																	}}
																>
																	<TableHead />
																	{games?.games.map((game, index) => {
																		return <TableBody game={game} key={index} />;
																	})}
																</table>
															</>
														)}
													</TabPane>
													<TabPane
														tab={
															<p>With Sorter</p>
														}
														key={2}
													>
														{tabsValue === 2 && (
															<>
																<Table game={games?.games} />
															</>
														)}
													</TabPane>
												</Tabs>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h1 className="text-center text-3xl font-bold mt-10">
								Game Database
							</h1>
							<div className="container mx-auto text-center mt-10 mb-10">
								<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 ml-10 mr-10">
									{games.games?.map((game, index) => {
										return <GameCard game={game} key={index} isHome={true} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Home;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../components/Chart";
import Error from "../components/Error";

import Loading from "../components/Loading";
import GameCard from "../components/GameCard";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import NoDataFound from "../components/NoDataFound";
import { fetchGames } from "../stores/games/action";

function Home() {
	const dispatch = useDispatch();
	const [game, setGame] = useState("");
	const [price, setPrice] = useState(0);

	const { games, loadingFetch, error } = useSelector((state) => state.games);

	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	useEffect(() => {
		if (!games) {
			return <NoDataFound />;
		} else {
			let gamesName = games.map((game) => {
				return game.name;
			});

			let gamesPrice = games.map((game) => {
				return Number(game.price);
			});

			setGame(gamesName);
			setPrice(gamesPrice);
		}
	}, [games]);

	return (
		<>
			{error && <Error />}
			{loadingFetch && <Loading />}

			{games.length === 0 ? (
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
												<table
													className="table-auto m-2 mx-auto"
													style={{
														alignItems: "center",
														justifyContent: "center",
														minWidth: "95%",
													}}
												>
													<TableHead />
													{games.map((game, index) => {
														return <TableBody game={game} key={index} />;
													})}
												</table>
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
								<div className="grid grid-cols-2 ml-10 mr-10">
									{games?.map((game, index) => {
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

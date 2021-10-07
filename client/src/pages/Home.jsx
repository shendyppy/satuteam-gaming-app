import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameCard from "../components/GameCard";
import Loading from "../components/Loading";
import NoDataFound from "../components/NoDataFound";
import { fetchGames } from "../stores/games/action";

function Home() {
	const dispatch = useDispatch();

	const { games, loadingFetch, error } = useSelector((state) => state.games);

	useEffect(() => {
		dispatch(fetchGames());
	}, [dispatch]);

	if (error) {
		return <h1>Something went wrong!</h1>;
	}

	return (
		<>
			{loadingFetch && <Loading />}

			{games.length === 0 ? (
				<NoDataFound />
			) : (
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
			)}
		</>
	);
}

export default Home;

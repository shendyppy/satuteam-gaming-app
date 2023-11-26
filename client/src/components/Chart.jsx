import { Bar } from "react-chartjs-2";

function Chart({ game, price }) {
	return (
		<>
			<div
				className="card shadow-xl ml-14 mr-14 mx-auto"
				style={{
					backgroundColor: "#c7d5e0",
					borderWidth: 2,
					borderColor: "#2a475e",
				}}
			>
				<Bar
					data={{
						labels: game,
						datasets: [
							{
								label: "Game's Price",
								data: price,
								backgroundColor: ["#66c0f4"],
								borderColor: ["#1b2838"],
								borderWidth: 2,
								options: {
									scales: {
										y: {
											display: true,
											beginAtZero: true,
										},
									},
								},
							},
						],
					}}
					width={30}
					height={30}
					className="m-4"
				/>
			</div>
		</>
	);
}

export default Chart;

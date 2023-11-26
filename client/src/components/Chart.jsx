import { Bar } from "react-chartjs-2";

function Chart({ game, price }) {
	return (
		<>
			<div
				className="card shadow-xl ml-14 mr-14"
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
					width={100}
					height={50}
					className="m-4"
				/>
			</div>
		</>
	);
}

export default Chart;

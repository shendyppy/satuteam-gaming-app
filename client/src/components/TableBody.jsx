import formatPrice from "../helpers/getRupiah";

function TableBody({ game }) {
	return (
		<>
			<tbody>
				<tr>
					<td
						style={{
							color: "#171a21",
							borderBottomColor: "#171a21",
							maxWidth: "100px",
							borderWidth: 1,
							borderColor: "#2a475e",
							padding: 5,
							fontSize: 22,
						}}
						className="text-center"
					>
						{game.id}.
					</td>
					<td
						style={{
							color: "#171a21",
							borderBottomColor: "#171a21",
							maxWidth: "400px",

							borderWidth: 1,
							borderColor: "#2a475e",
							padding: 5,
							fontSize: 22,
						}}
						className="text-center"
					>
						{game.name}
					</td>
					<td
						style={{
							color: "#171a21",
							borderBottomColor: "#171a21",
							maxWidth: "100px",
							borderWidth: 1,
							borderColor: "#2a475e",
							padding: 5,
							fontSize: 22,
						}}
					>
						{formatPrice(Number(game.price))}
					</td>
				</tr>
			</tbody>
		</>
	);
}

export default TableBody;

function TableHead() {
	return (
		<>
			<thead>
				<tr>
					<th
						style={{
							color: "#2a475e",
							backgroundColor: "#66c0f4",
							fontSize: 24,
						}}
					>
						No.
					</th>
					<th
						style={{
							color: "#2a475e",
							backgroundColor: "#66c0f4",
							fontSize: 24,
						}}
					>
						Name
					</th>
					<th
						style={{
							color: "#2a475e",
							backgroundColor: "#66c0f4",
							fontSize: 24,
							padding: 10,
						}}
					>
						Price
					</th>
				</tr>
			</thead>
		</>
	);
}

export default TableHead;

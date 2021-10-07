import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div
				className="navbar mb-2 shadow-lg bg-light text-neutral-content"
				style={{ backgroundColor: "#2a475e" }}
			>
				<div className="flex-1 px-2 mx-2">
					<Link to={"/"}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
							alt="No Data"
							className="inline"
							style={{ width: "10%", height: "10%" }}
						/>
						<span
							className="text-lg font-bold inline ml-2"
							style={{ color: "#c7d5e0" }}
						>
							STEAM
						</span>
					</Link>
				</div>
				<div
					className="flex-none hidden px-2 mx-2 lg:flex"
					style={{ color: "#c7d5e0" }}
				>
					<div className="flex items-stretch">
						<Link to={"/cart"}>
							<button className="btn btn-ghost btn-sm rounded-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-cart mr-2"
									viewBox="0 0 16 16"
								>
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
								Cart
							</button>
						</Link>
						<Link to={"/add"}>
							<button className="btn btn-ghost btn-sm rounded-btn" href=" ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-plus-square mr-2"
									viewBox="0 0 16 16"
								>
									<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
								</svg>
								Add a Game
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;

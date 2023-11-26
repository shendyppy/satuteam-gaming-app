import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav
				id="header"
				className="w-full z-30 top-0 py-1"
				style={{ backgroundColor: "#2a475e" }}
			>
				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
					<div className="order-1 md:order-2 mr-10">
						<Link to={"/"}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
								alt="No Data"
								className="inline"
								style={{ width: "100px", height: "50px" }}
							/>
							<span
								className="text-lg font-bold inline"
								style={{ color: "#c7d5e0" }}
							>
								SATUTEAM
							</span>
						</Link>
					</div>
					<label
						for="menu-toggle"
						className="cursor-pointer md:hidden block ml-10"
					>
						<svg
							className="fill-current text-gray-900"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" />

					<div
						className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 ml-5"
						id="menu"
					>
						<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
							<li>
								<Link to={"/cart"}>
									<button
										className="btn btn-ghost rounded-btn hover:grow no-underline hover:text-black hover:underline py-2 px-4"
										style={{ color: "#c7d5e0" }}
									>
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
							</li>
							<li>
								<Link to={"/add"}>
									<button
										className="btn btn-ghost rounded-btn hover:grow no-underline hover:text-black hover:underline py-2 px-4"
										href=" "
										style={{ color: "#c7d5e0" }}
									>
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
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

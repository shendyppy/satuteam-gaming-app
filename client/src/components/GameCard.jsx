import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

import { addCart, deleteCart } from "../stores/cart/action";
import formatPrice from "../helpers/getRupiah";
import { deleteGame } from "../stores/games/action";

function GameCard({ isHome, isCart, game, cart }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const { carts } = useSelector((state) => state.carts);

	const handleToEdit = (e) => {
		e.preventDefault();
		history.push(`/edit/${game.id}`);
	};

	const handleDeleteGame = (e) => {
		e.preventDefault();
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this data!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(deleteGame(game.id));
					swal("Poof! Your data has been deleted!", {
						icon: "success",
					});
				} else {
					swal("Your data is safe!", {
						icon: "info",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleBuyGame = (e) => {
		e.preventDefault();
		swal({
			title: "Want to buy this game?",
			text: "Once you buy it, you will be able to play this game!",
			icon: "info",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(deleteCart(cart.id));
					swal("Thank you for buying! Enjoy the game!", {
						icon: "success",
					});
				} else {
					swal("Its okay! Take your time", {
						icon: "info",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDeleteGameFromCart = (e) => {
		e.preventDefault();
		swal({
			title: "Do you want to delete this from your cart?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(deleteCart(cart.id));
					swal("Its okay! Take your time to browse another game", {
						icon: "info",
					});
				} else {
					swal("Maybe next time!", {
						icon: "info",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleAddToCart = (e) => {
		if (carts.filter((el) => el.id === game.id).length === 0) {
			e.preventDefault();
			dispatch(addCart(game));
			toast.success("Successfully adding game to your cart!");
		} else {
			e.preventDefault();
			toast.error("Already in your cart!");
		}
	};

	if (isHome) {
		return (
			<>
				<div
					className="card bordered m-5 shadow-2xl overflow-auto mr-2"
					style={{
						backgroundColor: "#1b2838",
						color: "#c7d5e0",
						borderWidth: 2,
						borderColor: "#c7d5e0",
						minWidth: "150px",
					}}
				>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>

					<figure style={{ alignItems: "center", justifyContent: "center" }}>
						<img
							src={game.cover}
							alt="No Data"
							style={{ minHeight: "100px" }}
						/>
					</figure>

					<div
						className="mx-auto card-actions"
						style={{ alignItems: "center", justifyContent: "center" }}
					>
						<a href=" " onClick={handleAddToCart}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-plus-circle ml-2 mr-2"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</a>
						<a href=" " onClick={handleToEdit}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-pen mr-2"
								viewBox="0 0 16 16"
							>
								<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
							</svg>
						</a>

						<a href={game.steamLink}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-info-circle mr-2"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
							</svg>
						</a>
						<a href=" " onClick={handleDeleteGame}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-trash"
								viewBox="0 0 16 16"
							>
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
								<path
									fillRule="evenodd"
									d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
								/>
							</svg>
						</a>

						<div
							className="mt-4 mb-10 m-4"
							style={{ alignItems: "center", justifyContent: "center" }}
						>
							<h2 className="card-title text-center">{game.name}</h2>
							{game.price === 0 ? (
								<h2 className="card-title" style={{ color: "#66c0f4" }}>
									Free to Play
								</h2>
							) : (
								<h2 className="card-title" style={{ color: "#66c0f4" }}>
									{formatPrice(Number(game.price))}
								</h2>
							)}

							<p style={{ minHeight: "100px" }}>{game.description}</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (isCart) {
		return (
			<>
				<div
					className="card bordered m-5 shadow-2xl overflow-auto"
					style={{
						backgroundColor: "#1b2838",
						color: "#c7d5e0",
						borderWidth: 2,
						borderColor: "#c7d5e0",
						minWidth: "150px",
					}}
				>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<figure style={{ alignItems: "center", justifyContent: "center" }}>
						<img
							src={cart.cover}
							alt="No Data"
							style={{ minHeight: "100px" }}
						/>
					</figure>
					<div
						className="mx-auto card-actions mt-4"
						style={{ alignItems: "center", justifyContent: "center" }}
					>
						<a href=" " onClick={handleBuyGame}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-bag mr-4"
								viewBox="0 0 16 16"
							>
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
							</svg>
						</a>
						<a href=" " onClick={handleDeleteGameFromCart}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-trash ml-4"
								viewBox="0 0 16 16"
							>
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
								<path
									fillRule="evenodd"
									d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
								/>
							</svg>
						</a>
					</div>

					<div className="mt-4 mb-10 m-4">
						<h2 className="card-title text-center">{cart.name}</h2>
						{cart.price === 0 ? (
							<h2 className="card-title" style={{ color: "#66c0f4" }}>
								Free to Play
							</h2>
						) : (
							<h2 className="card-title" style={{ color: "#66c0f4" }}>
								{formatPrice(Number(cart.price))}
							</h2>
						)}
						<p style={{ minHeight: "100px" }}>{cart.description}</p>
					</div>
				</div>
			</>
		);
	}
}

export default GameCard;

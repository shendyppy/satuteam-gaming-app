import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Home", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("SATUTEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});

	test("Should render footer correctly", () => {
		render(<App />);

		screen.getByText(
			"Copyright © 2023 - All right reserved by Shendy Putra Perdana Yohansah"
		);
	});

	test("Should render message whenever error", () => {
		render(<App />);

		screen.getByText("No Data Found!");
	});
});

describe("Add", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("SATUTEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});

	test("Should render footer correctly", () => {
		render(<App />);

		screen.getByText(
			"Copyright © 2023 - All right reserved by Shendy Putra Perdana Yohansah"
		);
	});

	test("Should render message whenever error", () => {
		render(<App />);

		screen.getByText("No Data Found!");
	});
});

describe("Edit", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("SATUTEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});

	test("Should render footer correctly", () => {
		render(<App />);

		screen.getByText(
			"Copyright © 2023 - All right reserved by Shendy Putra Perdana Yohansah"
		);
	});

	test("Should render message whenever error", () => {
		render(<App />);

		screen.getByText("No Data Found!");
	});
});

describe("Cart", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("SATUTEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});

	test("Should render footer correctly", () => {
		render(<App />);

		screen.getByText(
			"Copyright © 2023 - All right reserved by Shendy Putra Perdana Yohansah"
		);
	});

	test("Should render message whenever error", () => {
		render(<App />);

		screen.getByText("No Data Found!");
	});
});

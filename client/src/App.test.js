import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Home", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("STEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});
});

describe("Add", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("STEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});
});

describe("Edit", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("STEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});
});

describe("Cart", () => {
	test("Should render navbar correctly", () => {
		render(<App />);

		screen.getByText("STEAM");
		screen.getByText("Cart");
		screen.getByText("Add a Game");
	});
});

import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByText("welcome to next");

		expect(heading).toBeDefined();
	});
});

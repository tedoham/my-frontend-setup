import { SampleButton } from "@/components/button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
	it("renders a heading", () => {
		render(<SampleButton />);

		const text = screen.getByText("Sample Button");

		expect(text).toBeDefined();
	});
});

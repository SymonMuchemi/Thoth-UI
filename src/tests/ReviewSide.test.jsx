import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ReviewSide from "../component/ReviewSide";


test('Render ReviewSide component with correct text', () => {
    render(<ReviewSide/>)

    const firstHeading = screen.getByText(/AI Review:/i)
    const secondHeading = screen.getByText(/Suggested Changes/i)

    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
})

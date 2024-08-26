import { render, screen } from "@testing-library/react";
import Header from "../component/header";
import { expect, test } from "vitest";

test("Renders the Header component with the correct test", () => {
  render(<Header />);

  // check if the header text is in the document
  const headerElement = screen.getByText(
    /Thoth: Your AI Powered Code Reviewer/i
  );
  expect(headerElement).toBeInTheDocument();
});

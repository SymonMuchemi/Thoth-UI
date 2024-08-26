import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import InputSide from "../component/inputSide";

test("Renders the InputSide Component with the correct texts", () => {
  render(<InputSide />);

  // Headers in the document
  const firstHeaderElement = screen.getByText(/Paste code here:/i);
  const secondHeaderElement = screen.getByText(/Check for:/i);

  // label texts
  const firstOptionText = screen.getByText(/Code smell/i);
  const secondOptionText = screen.getByText(/Optimization/i);

  // button texts
  const reviewButtonText = screen.getByText(/Get Code Review/i);
  const githubButtonText = screen.getByText(/Get Code from GitHub/i);

  expect(firstHeaderElement).toBeInTheDocument();
  expect(secondHeaderElement).toBeInTheDocument();
  expect(firstOptionText).toBeInTheDocument();
  expect(secondOptionText).toBeInTheDocument();
  expect(reviewButtonText).toBeInTheDocument();
  expect(githubButtonText).toBeInTheDocument();
});

test("Should toggle check-boxes correctly", () => {
  render(<InputSide />);

  const codeSmellCheckBox = screen.getByText(/Code smell/i);
  const optimizationCheckBox = screen.getByText(/Optimization/i);

  fireEvent.click(codeSmellCheckBox);
  expect(codeSmellCheckBox).toBeChecked;

  fireEvent.click(codeSmellCheckBox)
  expect(codeSmellCheckBox).not.toBeChecked;

  fireEvent.click(optimizationCheckBox)
  expect(optimizationCheckBox).toBeChecked;

  fireEvent.click(optimizationCheckBox)
  expect(optimizationCheckBox).not.toBeChecked;
});

test('Should allow simultaneous checkbox selection', () => {
  render(<InputSide/>)

  const codeSmellCheckBox = screen.getByText(/Code smell/i);
  const optimizationCheckBox = screen.getByText(/Optimization/i);

  fireEvent.click(codeSmellCheckBox);
  fireEvent.click(optimizationCheckBox);

  // ensure both are checked
  expect(codeSmellCheckBox).toBeChecked;
  expect(optimizationCheckBox).toBeChecked;

})

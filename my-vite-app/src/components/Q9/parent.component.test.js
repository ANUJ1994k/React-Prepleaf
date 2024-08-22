// ParentComponent.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "./ParentComponent";

describe("ParentComponent", () => {
  it("increments count when button is clicked", () => {
    render(<ParentComponent />);
    const buttonElement = screen.getByText(/increment/i);
    const countElement = screen.getByText(/count: 0/i);

    expect(countElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});

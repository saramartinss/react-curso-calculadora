import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Calculator", () => {
  it("Should render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should clean number field", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("C"));
    expect(getByTestId("txtNumbers")).toHaveValue("0");
  });

  it("Should sum 2 + 3 and return 5", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumbers")).toHaveValue("5");
  });

  it("Should subtract 5 - 3 and return 2", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumbers")).toHaveValue("2");
  });

  it("Should divide 6 - 3 and return 2", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumbers")).toHaveValue("2");
  });

  it("Should multiplicate 2 * 3 and return 6", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumbers")).toHaveValue("6");
  });

  it("Should sum 2.5 + 3 and return 5.5", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumbers")).toHaveValue("5.5");
  });
});

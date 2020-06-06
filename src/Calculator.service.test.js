import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from "./Calculator.service";

describe("Testing CalculatorService", () => {
  const [
    calculate,
    concatenateNumber,
    SUM,
    SUB,
    DIV,
    MULT,
  ] = CalculatorService();

  it("Should return 1 + 4 = 5", () => {
    let sum = calculate(1, 4, SUM);
    expect(sum).toEqual(5);
  });

  it("Should return 1 - 4 = -3", () => {
    let sub = calculate(1, 4, SUB);
    expect(sub).toEqual(-3);
  });

  it("Should return 1 / 4 = 0.25", () => {
    let div = calculate(1, 4, DIV);
    expect(div).toEqual(0.25);
  });

  it("Should return 1 * 4 = 4", () => {
    let mult = calculate(1, 4, MULT);
    expect(mult).toEqual(4);
  });

  it("Should return 0 to invalid operation", () => {
    let invalidOp = calculate(1, 4, "%");
    expect(invalidOp).toEqual(0);
  });
});

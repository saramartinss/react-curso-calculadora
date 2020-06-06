function CalculatorService() {
  const SUM = "+";
  const SUB = "-";
  const DIV = "/";
  const MULT = "*";

  function concatenateNumber(numActual, numConcat) {
    if (numActual === "0" || numActual === null) {
      numActual = "";
    }

    if (numConcat === "." && numActual === "") {
      return "0.";
    }

    if (numConcat === "." && numActual.indexOf(".") > -1) {
      return numActual;
    }

    return numActual + numConcat;
  }

  function calculate(a, b, op) {
    let result;

    switch (op) {
      case SUM:
        result = a + b;
        break;

      case SUB:
        result = a - b;
        break;

      case DIV:
        result = a / b;
        break;

      case MULT:
        result = a * b;
        break;

      default:
        result = 0;
    }

    return result;
  }

  return [calculate, concatenateNumber, SUM, SUB, DIV, MULT];
}

export default CalculatorService;

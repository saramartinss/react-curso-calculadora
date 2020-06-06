import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Calculator.css";
import CalculatorService from "./Calculator.service";

const [calculate, concatenateNumber, SUM, SUB, DIV, MULT] = CalculatorService();

function Calculator() {
  const [txtNumbers, setTxtNumbers] = useState("0");
  const [a, setA] = useState("0");
  const [b, setB] = useState(null);
  const [op, setOp] = useState(null);

  function addNumber(number) {
    let result;

    if (op === null) {
      result = concatenateNumber(a, number);
      setA(result);
    } else {
      result = concatenateNumber(b, number);
      setB(result);
    }

    setTxtNumbers(result);
  }

  function setOperation(operation) {
    if (op === null) {
      setOp(operation);
      return;
    }
    if (b !== null) {
      const result = calculate(parseFloat(a), parseFloat(b), op);
      setOp(operation);
      setA(result.toString());
      setB(null);
      setTxtNumbers(result.toString());
    }
  }

  function actionCalculate() {
    if (b === null) {
      return;
    }
    const result = calculate(parseFloat(a), parseFloat(b), op);
    setTxtNumbers(result.toString());
  }

  function clean() {
    setTxtNumbers("0");
    setA("0");
    setB(null);
    setOp(null);
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={clean} id>
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumbers"
              className="text-right"
              readOnly="readonly"
              value={txtNumbers}
              data-testid="txtNumbers"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("7")}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => setOperation(DIV)}>
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => setOperation(MULT)}>
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => setOperation(SUB)}>
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber(".")}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={actionCalculate}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => setOperation(SUM)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;

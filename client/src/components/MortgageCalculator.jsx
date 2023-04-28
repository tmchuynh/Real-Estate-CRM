import React, { useState } from 'react';
import { Container, Form, Button, Stack } from 'react-bootstrap';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const monthlyInterestRate = interestRate / 1200;
    const months = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <Form>
      <h4>Monthly Payment</h4>
      <h1>${monthlyPayment}</h1>
      <Stack gap={3}>

        <Form.Group controlId="formLoanAmount">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formInterestRate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLoanTerm">
          <Form.Label>Loan Term (in years)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter loan term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleCalculate}>
          Calculate
        </Button>
      </Stack>
    </Form>

  );
}

export default MortgageCalculator;

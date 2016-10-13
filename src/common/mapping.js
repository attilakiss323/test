import { Record } from 'immutable';

export const Loan = Record({
  totalPrincipal: null,
  term: null,
  totalCostOfCredit: null,
  totalRepayableAmount: null,
  monthlyPayment: null
});

export const Slider = Record({
  defaultValue: null,
  max: null,
  min: null,
  step: null,
  value: null
});

const Mapping = Record({
  amountInterval: new Slider({}),
  apiError: null,
  termInterval: new Slider({}),
  loanInfo: new Loan({})
});

export default Mapping;

export function generateAmountInterval(data) {
  return new Slider({
    defaultValue: data.amountInterval.defaultValue,
    max: data.amountInterval.max,
    min: data.amountInterval.min,
    step: data.amountInterval.step
  });
}

export function generateTermInterval(data) {
  return new Slider({
    defaultValue: data.termInterval.defaultValue,
    max: data.termInterval.max,
    min: data.termInterval.min,
    step: data.termInterval.step
  });
}

export function generateLoanInfo(data) {
  return new Loan({
    totalPrincipal: parseInt(data.totalPrincipal, 10),
    term: parseInt(data.term, 10),
    totalCostOfCredit: data.totalCostOfCredit,
    totalRepayableAmount: data.totalRepayableAmount,
    monthlyPayment: data.monthlyPayment
  });
}

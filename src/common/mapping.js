import { Record } from 'immutable';

export const Slider = Record({
  min: null,
  max: null,
  step: null,
  defaultValue: null,
});

const Mapping = Record({
  amountInterval: new Slider({}),
  termInterval: new Slider({})
});

export default Mapping;

export function generateAmountInterval(data) {
  return new Slider({
    min: data.amountInterval.min,
    max: data.amountInterval.max,
    step: data.amountInterval.step,
    defaultValue: data.amountInterval.defaultValue
  });
}

export function generateTermInterval(data) {
  return new Slider({
    min: data.termInterval.min,
    max: data.termInterval.max,
    step: data.termInterval.step,
    defaultValue: data.termInterval.defaultValue
  });
}

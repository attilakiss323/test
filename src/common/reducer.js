import InitialState, { generateAmountInterval, generateTermInterval } from './mapping';
import * as actions from './actions';

export const initialState = new InitialState();
const revive = state => initialState
  .mergeDeep(state);

export default function reducer(inputState = initialState, action) {
  const state = !(state instanceof InitialState) ? revive(inputState) : inputState;

  const { type } = action;

  switch (type) {
    case actions.FETCH_CONSTRAINTS_SUCCESS:
      console.log(action.data);
      return state
        .updateIn(['amountInterval'], () => generateAmountInterval(action.data))
        .updateIn(['termInterval'], () => generateTermInterval(action.data));

    default:
      return state;
  }
}

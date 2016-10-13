import InitialState, { generateAmountInterval, generateTermInterval, generateLoanInfo } from './mapping';
import * as actions from './actions';

export const initialState = new InitialState();
const revive = state => initialState
  .mergeDeep(state);

export default function reducer(inputState = initialState, action) {
  const state = !(state instanceof InitialState) ? revive(inputState) : inputState;

  const { type } = action;

  switch (type) {
    case actions.FETCH_CONSTRAINTS_SUCCESS:
      return state
        .updateIn(['amountInterval'], () => generateAmountInterval(action.data))
        .updateIn(['termInterval'], () => generateTermInterval(action.data));

    case actions.CHANGE_VALUE:
      return state.updateIn([action.name, 'value'], () => action.value);

    case actions.CALULATE_LOAN_SUCCESS:
      return state.updateIn(['loanInfo'], () => generateLoanInfo(action.data));
    default:
      return state;
  }
}

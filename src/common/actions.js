import requestManger from '../lib/requestManager';

export const FETCH_CONSTRAINTS_SUCCESS = 'FETCH_CONSTRAINTS_SUCCESS';
export const FETCH_CONSTRAINTS_FAILURE = 'FETCH_CONSTRAINTS_FAILURE';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CALULATE_LOAN_SUCCESS = 'CALULATE_LOAN_SUCCESS';
export const CALULATE_LOAN_FAILURE = 'CALULATE_LOAN_FAILURE';

export function fetchConstraints() {
  return dispatch => {
    requestManger.fetchEntities('https://js-developer-second-round.herokuapp.com/api/v1/application/constraints')
      .then(res => dispatch({ type: FETCH_CONSTRAINTS_SUCCESS, data: res.data }))
      .then(() => dispatch(calculateDefaultLoan()))
      .catch(res => dispatch({ type: FETCH_CONSTRAINTS_FAILURE, error: res }));
  };
}

export function changeValue(value, name) {
  return {
    type: CHANGE_VALUE,
    name,
    value
  };
}

export function calculateDefaultLoan() {
  return (dispatch, getState) => {
    const defaultAmount = getState().appReducer.getIn(['amountInterval', 'defaultValue']);
    const defaultTerm = getState().appReducer.getIn(['termInterval', 'defaultValue']);

    requestManger.fetchEntities(`https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?amount=${defaultAmount}&term=${defaultTerm}`)
      .then(res => dispatch({ type: CALULATE_LOAN_SUCCESS, data: res.data }))
      .catch(res => dispatch({ type: CALULATE_LOAN_FAILURE, error: res }));
  };
}

export function calculateLoan() {
  return (dispatch, getState) => {
    const amountInterval = getState().appReducer.getIn(['amountInterval']);
    const termInterval = getState().appReducer.getIn(['termInterval']);

    const amount = amountInterval.get('value') || amountInterval.get('defaultValue');
    const term = termInterval.get('value') || termInterval.get('defaultValue');

    requestManger.fetchEntities(`https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?amount=${amount}&term=${term}`)
      .then(res => dispatch({ type: CALULATE_LOAN_SUCCESS, data: res.data }))
      .catch(res => dispatch({ type: CALULATE_LOAN_FAILURE, error: res.error }));
  };
}

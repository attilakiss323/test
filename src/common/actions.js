import requestManger from '../lib/requestManager';

export const FETCH_CONSTRAINTS_SUCCESS = 'FETCH_CONSTRAINTS_SUCCESS';
export const FETCH_CONSTRAINTS_FAILURE = 'FETCH_CONSTRAINTS_FAILURE';

export function fetchConstraints() {
  return dispatch => {
    requestManger.fetchEntities('https://js-developer-second-round.herokuapp.com/api/v1/application/constraints')
      .then(res => dispatch({ type: FETCH_CONSTRAINTS_SUCCESS, data: res.data }))
      .catch(res => dispatch({ type: FETCH_CONSTRAINTS_FAILURE, error: res.error }));
  };
}

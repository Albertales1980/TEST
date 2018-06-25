export const FETCH_SPORTS_BEGIN   = 'FETCH_SPORTS_BEGIN';
export const FETCH_SPORTS_SUCCESS = 'FETCH_SPORTS_SUCCESS';
export const FETCH_SPORTS_FAILURE = 'FETCH_SPORTS_FAILURE';

export const fetchSportsBegin = () => ({
  type: FETCH_SPORTS_BEGIN
});

export const fetchSportsSuccess = elements => ({
  type: FETCH_SPORTS_SUCCESS,
  payload: { elements }
});

export const fetchSportsError = error => ({
  type: FETCH_SPORTS_FAILURE,
  payload: { error }
});

export function fetchSports() {
  return dispatch => {
    dispatch(fetchSportsBegin());
    return fetch("/events.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSportsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchSportsError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
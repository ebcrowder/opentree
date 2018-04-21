import { FETCH_COURSE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE:
      return [...state, action.payload];
    default:
      return state;
  }
}

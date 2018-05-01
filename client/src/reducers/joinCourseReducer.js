import { FETCH_JOIN_COURSE_BY_ID } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_JOIN_COURSE_BY_ID:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

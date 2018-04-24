import { FETCH_COURSE } from '../actions';
import { FETCH_COURSE_BY_ID } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COURSE:
      return action.payload;
    case FETCH_COURSE_BY_ID:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

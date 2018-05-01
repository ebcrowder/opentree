import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import joinCourseReducer from './joinCourseReducer';

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  joinCourse: joinCourseReducer
});

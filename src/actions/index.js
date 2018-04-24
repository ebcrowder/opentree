import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const FETCH_COURSE = 'fetch_course';
export const FETCH_COURSE_BY_ID = 'fetch_course_by_id';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCourse = () => async dispatch => {
  const res = await axios.get('/api/course');

  dispatch({ type: FETCH_COURSE, payload: res.data });
};

export const fetchCourseByID = id => async dispatch => {
  const res = await axios.get(`/api/course/${id}`);

  dispatch({ type: FETCH_COURSE_BY_ID, payload: res.data });
};

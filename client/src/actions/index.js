import axios from 'axios';

export const FETCH_USER = 'fetch_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_COURSE = 'fetch_course';
export const FETCH_COURSE_BY_ID = 'fetch_course_by_id';
export const JOIN_COURSE_BY_ID = 'join_course_by_id';
export const UPDATE_COURSE_BY_ID = 'update_course_by_id';

// OAuth flow
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = () => async dispatch => {
  const res = await axios.get('/api/logout');

  dispatch({ type: LOGOUT_USER, payload: res.data });
};

// API calls for database
export const fetchCourse = () => async dispatch => {
  const res = await axios.get('/api/course');

  dispatch({ type: FETCH_COURSE, payload: res.data });
};

export const fetchCourseByID = id => async dispatch => {
  const res = await axios.get(`/api/course/${id}`);

  dispatch({ type: FETCH_COURSE_BY_ID, payload: res.data });
};

export const joinCourseByID = (id, values, callback) => async dispatch => {
  const res = await axios
    .post(`/api/course/${id}`, { users_id: values })
    .then(() => callback());
  dispatch({ type: JOIN_COURSE_BY_ID, payload: res.data });
};

export const updateCourseByID = (id, values, callback) => async dispatch => {
  const res = await axios
    .patch(`/api/course/${id}`, { users_id: values })
    .then(() => callback());
  dispatch({ type: UPDATE_COURSE_BY_ID, payload: res.data });
};

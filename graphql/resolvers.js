const users = [
  {
    _id: '123456',
    googleId: '78910',
    googleName: 'Eric'
  }
];

const courses = [
  {
    _id: '5ae3c27deecafc202c5461ae',
    date: 'May 2, 2018',
    time: '9:00 PM',
    course: 'test123',
    teacher: 'Bob Roth',
    room: 'Main',
    duration: 30,
    users: []
  },
  {
    _id: '5468jdfsvdfkvj5404505df',
    date: 'May 3, 2018',
    time: '12:00 PM',
    course: 'test456',
    teacher: 'Jefferson',
    room: 'Main',
    duration: 30,
    users: []
  }
];

exports.resolvers = {
  Query: {
    courses: () => {
      return courses;
    },
    course: (root, { _id }) => {
      return courses.find(course => course._id == _id);
    },
    users: () => {
      return users;
    },
    user: (root, { _id }) => {
      return users.find(user => user._id == _id);
    }
  },
  Mutation: {
    joinCourseByID: (_id, input) => {
      if (!courses[_id]) {
        throw new Error('no course exists with id ' + _id);
      }
      // This replaces all old data, but some apps might want partial update.
      course[_id] = input;
      return new Course(_id, input);
    }
  }
};

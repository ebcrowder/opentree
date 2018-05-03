const { makeExecutableSchema } = require('graphql-tools');
const { resolvers } = require('./resolvers.js');

// ! denotes a required field

const typeDefs = `
type User {
  _id: ID!
  googleId: String
  googleName: String
}

type Course {
  _id: ID!
  date: String
  time: String
  course: String
  teacher: String
  room: String
  duration: Int
  users: [User]
}

# the schema allows the following query:
type Query {
  users: [User]
  user(_id: ID!): User
  courses: [Course]
  course(_id: ID!): Course
}

# this schema allows the following mutation:
type Mutation {
  joinCourseByID(_id: ID!, users: String): User
}
`;

exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

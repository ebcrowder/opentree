const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  date: String,
  time: String,
  course: String,
  teacher: String,
  room: String,
  duration: Number,
  users: [{ type: Schema.Types.ObjectId, ref: 'users' }]
});

mongoose.model('course', courseSchema);

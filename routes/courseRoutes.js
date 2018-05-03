const passport = require('passport');
const mongoose = require('mongoose');

const Course = mongoose.model('course');

module.exports = app => {
  // routes for class data

  // create new course
  app.post('/api/course', async (req, res) => {
    const { date, time, course, teacher, room, duration } = req.body;

    const schedule = new Course({
      date: date,
      time: time,
      course: course,
      teacher: teacher,
      room: room,
      duration: duration
    });

    try {
      await schedule.save();
      res.send(schedule);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // get all courses
  app.get('/api/course', (req, res) => {
    Course.find({}, function(err, course) {
      var courseMap = {};

      course.forEach(function(course) {
        courseMap[course._id] = course;
      });

      res.send(courseMap);
    });
  });

  // get specific course by id
  app.get('/api/course/:_id', (req, res) => {
    Course.find({ _id: req.params['_id'] }, function(err, course) {
      if (err) {
        console.error(err);
        res.send(400);
      }
      res.send(course);
    });
  });

  // assign course to user
  app.post('/api/course/:_id', async (req, res) => {
    const { users_id } = req.body;
    Course.findOneAndUpdate(
      { _id: req.params['_id'] },
      { users: users_id },
      function(err, course) {
        if (err) {
          console.error(err);
          res.send(400);
        }
        res.send(course);
      }
    );
  });

  // update course assigned to user
  app.patch('/api/course/:_id', async (req, res) => {
    const { users_id } = req.body;
    Course.findOneAndUpdate({ _id: req.params['_id'] }, { users: [] }, function(
      err,
      course
    ) {
      if (err) {
        console.error(err);
        res.send(400);
      }
      res.send(course);
    });
  });
};

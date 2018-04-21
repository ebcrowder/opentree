const passport = require('passport');
const mongoose = require('mongoose');

const Course = mongoose.model('course');

module.exports = app => {
  // routes re: google oauth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/summary');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // routes for class data

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

  app.get('/api/course', (req, res) => {
    Course.find({}, function(err, course) {
      var courseMap = {};

      course.forEach(function(user) {
        courseMap[course._id] = course;
      });

      res.send(courseMap);
    });
  });
};

const mongoose = require('mongoose');

// Video schema
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

// Module schema
const moduleSchema = new mongoose.Schema({
  moduleName: { type: String, required: true },
  videos: [videoSchema],
});

// Course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [moduleSchema],
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

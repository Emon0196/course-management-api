const Course = require('../models/Course');

// Create a new course
const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get course by ID
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a course (add/remove modules, update videos)
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Partial update (e.g., add/remove modules or videos)
const partialUpdateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const { modules } = req.body;

    if (modules) {
      modules.forEach((moduleUpdate) => {
        const existingModule = course.modules.find(
          (m) => m.moduleName === moduleUpdate.moduleName
        );
        if (existingModule) {
          moduleUpdate.videos.forEach((videoUpdate) => {
            const existingVideo = existingModule.videos.find(
              (v) => v.title === videoUpdate.title
            );
            if (existingVideo) {
              existingVideo.url = videoUpdate.url;
            } else {
              existingModule.videos.push(videoUpdate);
            }
          });
        } else {
          course.modules.push(moduleUpdate);
        }
      });
    }

    await course.save();
    res.json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.status(204).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createCourse, getCourse, updateCourse, partialUpdateCourse, deleteCourse };

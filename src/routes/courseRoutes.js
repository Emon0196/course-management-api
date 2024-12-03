const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/auth');
const { validateCourseData, validate } = require('../middlewares/validate');
const {
  createCourse,
  getCourse,
  updateCourse,
  partialUpdateCourse,
  deleteCourse
} = require('../controllers/courseController');

// Define routes with authentication for all operations
router.post('/courses', authenticateJWT, validateCourseData, validate, createCourse); // Authentication required for creating courses
router.get('/courses/:id', authenticateJWT, getCourse); // Authentication required for retrieving courses

router.put('/courses/:id', authenticateJWT, validateCourseData, validate, updateCourse); // Authentication required for updating courses
router.patch('/courses/:id', authenticateJWT, partialUpdateCourse); // Authentication required for partial update

router.delete('/courses/:id', authenticateJWT, deleteCourse); // Authentication required for deleting courses

module.exports = router;

const { body, validationResult } = require('express-validator');

// Validation middlewares
const validateCourseData = [
  body('title').isString().notEmpty().withMessage('Title is required'),
  body('description').isString().notEmpty().withMessage('Description is required'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Global error handler
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
};

module.exports = { validateCourseData, validate, errorHandler };

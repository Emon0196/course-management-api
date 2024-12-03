const jwt = require('jsonwebtoken');

// Replace with the secret you use in your application
const JWT_SECRET = 'my_jwt_secret_key';

// Create a payload (you can add other details like user ID)
const payload = {
  courseName: 'Husseinberg-for-beginners',
  courseId: 'testcourse_id',
};

// Generate the token
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

console.log('Generated Token:', token);

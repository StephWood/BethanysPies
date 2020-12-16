const express = require('express');
const app = express();

const router = express.Router();

// GET request to return full list
router.get('/', (req, res, next) => {
  res.send('Lemon Meringue');
});

//configure router to prefix all routes with /api/v1
app.use('/api/', router);

// create server to listen on port 5000
app.listen(5000, () => {
  console.log('Listening on Port 5000');
});

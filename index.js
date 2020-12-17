const express = require('express');
const app = express();
const pieRepo = require('./repos/pieRepo');

const router = express.Router();

// GET request to return full list
router.get('/', (req, res, next) => {
  pieRepo.get(
    (data) => {
      res.status(200).json({
        status: 200,
        statusText: 'OK',
        message: 'All pies retrieved',
        data: data,
      });
    },
    (err) => {
      next(err);
    }
  );
});

// GET/id to return single pie
router.get('/:id', (req, res, next) => {
  pieRepo.getById(
    req.params.id,
    (data) => {
      if (data) {
        res.status(200).json({
          status: 200,
          statusText: 'OK',
          message: 'Single pie retrieved',
          data: data,
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: 'Not Found',
          message: req.params.id + ' pie could not be found.',
          error: {
            code: 'NOT_FOUND',
            message: req.params.id + ' pie could not be found.',
          },
        });
      }
    },
    (err) => {
      next(err);
    }
  );
});

//configure router to prefix all routes with /api/v1
app.use('/api/', router);

// create server to listen on port 5000
app.listen(5000, () => {
  console.log('Listening on Port 5000');
});

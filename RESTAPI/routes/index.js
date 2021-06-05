const express = require('express');

const indexCtrl = require('../controllers/index');

const router = express.Router();

// Getting all the tasks
router.get('/tasks', indexCtrl.getTasks);

// Posting a single task
router.post('/task', indexCtrl.postTask);

// Deleting a task
router.delete('/task/:id', indexCtrl.deleteTask);

// Updating a task
router.put('/task', indexCtrl.updateTask);

module.exports = router;
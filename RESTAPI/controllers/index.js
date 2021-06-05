const Task = require('../models/task');

exports.postTask = (req, res, next) => {
  const task = req.body.task;
  // console.log("task", task);

  if (!task) {
    return {
      message: "No task provided",
    };
  }

  const taskObj = new Task(task);
  taskObj.addTask()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
}

exports.getTasks = (req, res, next) => {
  Task.getAllTasks()
    .then(tasks => {
      res.json(tasks[0]);
    })
    .catch(
      err => console.log(err)
    )
}

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.id;
  Task.deleteTaskById(taskId)
    .then(result => {
      // console.log(result);
      return res.json({
        message: "Succesfully deleted item",
      });
    })
    .catch(err => console.log(err)); 
}

exports.updateTask = (req, res, next) => {
  const taskId = req.body.id;
  const taskDetails = req.body.task;
  Task.updateTaskById(taskId, taskDetails)
    .then(result => {
      // console.log(result);
      return res.json({
        message: "Successfully updated the task",
      });
    })
    .catch(err => console.log(err));
}
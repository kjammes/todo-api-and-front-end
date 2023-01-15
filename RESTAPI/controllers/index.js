const Task = require("../models/task");

exports.postTask = (req, res, next) => {
  const task = req.body.task;

  if (!task) {
    return res.status(422).json({
      //422 Unprocessable Entity
      message: "No task provided",
    });
  }

  const taskObj = new Task(task);
  taskObj
    .addTask()
    .then((result) => {
      return res.status(201).json({
        message: "Task added successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Failed to save the task. Please try again later",
      });
    });
};

exports.getTasks = (req, res, next) => {
  Task.getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks[0]);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Failed to fetch all tasks. Please try again later",
      });
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.id;
  Task.deleteTaskById(taskId)
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully deleted item",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: `Failed to delete task with id : ${taskId}`,
      });
    });
};

exports.updateTask = (req, res, next) => {
  const taskId = req.body.id;
  const taskDetails = req.body.task;
  Task.updateTaskById(taskId, taskDetails)
    .then((result) => {
      return res.status(200).json({
        message: "Successfully updated the task",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: `Failed to update task with id : ${taskId} and taskDetails : ${taskDetails}`,
      });
    });
};

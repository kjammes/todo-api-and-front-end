const db = require("../util/db");

module.exports = class Task {
  constructor(taskDetails) {
    this.taskDetails = taskDetails;
  }

  addTask() {

    console.log(`Inserting ${this.taskDetails} into the DB`);

    return db.execute(
      "INSERT INTO todo(task) VALUES(?);",
      [this.taskDetails]
    );
  }

  static getAllTasks() {

    console.log(`Fetching all the tasks`);

    return db.execute(
      "SELECT * FROM todo;"
    );
  }

  static deleteTaskById(id) {

    console.log(`Trying to delete task with id : ${id}`);

    return db.execute(
      "DELETE FROM todo WHERE id=?",
      [id]
    );
  }

  static updateTaskById(id, task) {

    console.log(`Updating task with id : ${id} and task : ${task}`);

    return db.execute(
      "UPDATE todo SET task=? WHERE id=?",
      [task, id]
    );
  }
};

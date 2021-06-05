const db = require("../util/db");

module.exports = class Task {
  constructor(taskDetails) {
    this.taskDetails = taskDetails;
  }

  addTask() {
    return db.execute(
      "INSERT INTO todo(task) VALUES(?);",
      [this.taskDetails]
    );
  }

  static getAllTasks() {
    return db.execute(
      "SELECT * FROM todo;"
    );
  }

  static deleteTaskById(id) {
    return db.execute(
      "DELETE FROM todo WHERE id=?",
      [id]
    );
  }

  static updateTaskById(id, task) {
    return db.execute(
      "UPDATE todo SET task=? WHERE id=?",
      [task, id]
    );
  }
};

const taskService = require("../service/task.service");

class TasksController {
    async index() {
        return await taskService.getTasks();
    }
}

module.exports = new TasksController();
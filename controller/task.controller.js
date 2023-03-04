const taskService = require("../service/task.service");

class TasksController {
    async index() {
        return await taskService.getTasks();
    }

    async show(id) {
        return await taskService.getTaskById(id);
    }

    async store(requestBody) {
        return await taskService.createTask(requestBody);
    }

    async update(id, requestBody) {
        return await taskService.updateTask(id, requestBody);
    }
}

module.exports = new TasksController();
const taskService = require("../service/task.service");

class TasksController {
    async index(filters) {
        return await taskService.getTasks(filters);
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

    async destroy(id) {
        return await taskService.deleteTask(id);
    }

    async backlog(id) {
        return await taskService.setStatusBacklog(id);
    }

    async inProgress(id) {
        return await taskService.setStatusInProgress(id);
    }
}

module.exports = new TasksController();
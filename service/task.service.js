const taskRepository = require("../repository/task.repository");

class TaskService {
    async getTasks() {
        return await taskRepository.getTasks();
    }

    async getTaskById(id) {
        return await taskRepository.getTaskById(id);
    }

    async createTask(requestBody) {
        return await taskRepository.createTask(requestBody);
    }

    async updateTask(id, requestBody) {
        return await taskRepository.updateTask(id, requestBody);
    }
}


module.exports = new TaskService();
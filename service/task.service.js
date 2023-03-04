const taskRepository = require("../repository/task.repository");

class TaskService {
    async getTasks(filters) {
        return await taskRepository.getTasks(filters);
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

    async deleteTask(id) {
        return await taskRepository.deleteTask(id);
    }
}


module.exports = new TaskService();
const taskRepository = require("../repository/task.repository");

class TaskService {
    async getTasks() {
        return await taskRepository.getTasks();
    }
}


module.exports = new TaskService();
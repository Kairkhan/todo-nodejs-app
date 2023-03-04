class TaskRepository {
    async getTasks() {
        return {hello: "world"};
    }
}


module.exports = new TaskRepository();
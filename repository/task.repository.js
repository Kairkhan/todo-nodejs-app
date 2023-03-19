const Task = require("../model/task.model");

class TaskRepository {
    constructor() {
        this.listOfFilters = ['status', 'title', 'description'];
    }

    async getTasks(filters) {
        try {
            const updatedFilters = Object.fromEntries(
                Object.entries(filters).filter(([key]) => this.listOfFilters.includes(key))
            );

            return await Task.find(updatedFilters);

        } catch (error) {
            console.log(error);
        }
    }

    async getTaskById(id) {
        try {
            return await Task.findById(id);

        } catch (error) {
            console.log(error);
        }
    }

    async createTask(requestBody) {
        try {
            return await new Task({
                "title" : requestBody['title'],
                "description" : requestBody['description'],
                "status" : "backlog"
            }).save();

        } catch (error) {
            console.log(error);
        }
    }

    async updateTask(id, requestBody) {
        try {
            return await Task.findByIdAndUpdate(
                id, requestBody, {new: true}
            )

        } catch (error) {
            console.log(error);
        }
    }

    async deleteTask(id) {
        try {
            return await Task.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }

    async setStatusBacklog(id) {
        try {
            await Task.findById(id).updateOne({
               "status" : "backlog"
            });

            return "task updated"

        } catch (error) {
            console.log(error);
        }
    }

    async setStatusInProgress(id) {
        try {
            await Task.findById(id).updateOne({
                "status" : "in-progress"
            });

            return "task updated";

        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new TaskRepository();
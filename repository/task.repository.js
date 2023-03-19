const db = require("../model");
const Task = db.task;

class TaskRepository {
    constructor() {
        this.listOfFilters = ['status', 'title', 'description'];
    }

    async getTasks(filters) {
        try {
            const updatedFilters = Object.fromEntries(
                Object.entries(filters).filter(([key]) => this.listOfFilters.includes(key))
            );

            return await Task.findAll({where: updatedFilters});

        } catch (error) {
            console.log(error);
        }
    }

    async getTaskById(id) {
        try {
            return await Task.findByPk(id);

        } catch (error) {
            console.log(error);
        }
    }

    async createTask(requestBody) {
        try {
            return await Task.create({
                "title" : requestBody['title'],
                "description" : requestBody['description'],
                "status" : "backlog"
            });

        } catch (error) {
            console.log(error);
        }
    }

    async updateTask(id, requestBody) {
        try {
            return await this.findAndUpdate(id, requestBody);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTask(id) {
        try {
            const task = await Task.findByPk(id);

            if (!task) {
                return "not found id: " + id;
            }

            await task.destroy();

            return 'task deleted';

        } catch (error) {
            console.log(error);
        }
    }

    async setStatusBacklog(id) {
        try {
            return await this.findAndUpdate(id, {
                'status' : 'backlog'
            });

        } catch (error) {
            console.log(error);
        }
    }

    async setStatusInProgress(id) {
        try {
            return await this.findAndUpdate(id, {
                'status' : 'in-progress'
            });

        } catch (error) {
            console.log(error);
        }
    }

    async findAndUpdate(id, payload) {
        const task = await Task.findByPk(id);

        if (!task) {
            return "not found id: " + id;
        }

        await task.update(payload, {
            where: { id: id }
        });

        return "task updated";
    }
}


module.exports = new TaskRepository();
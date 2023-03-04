const {readFile, writeFile} = require("fs/promises");
const {readFileSync, existsSync, closeSync, openSync} = require("fs");

class TaskRepository {
    constructor() {
        this.filePath = process.cwd() + "/database.json";
        if (!existsSync(this.filePath)) {
            closeSync(openSync(this.filePath, 'w'));
        }
    }
    async getTasks(filters) {
        try {
            const rawData = (await readFile(this.filePath)).toString();

            const tasks = JSON.parse(rawData);

            if (filters.status) {
                return tasks.filter((task) => task.status == filters.status);
            }

            return tasks;

        } catch (error) {
            console.log(error);
        }
    }

    async getTaskById(id) {
        try {
            const rawData = (await readFile(this.filePath)).toString();
            const task  =  JSON.parse(rawData).find(
                (task) => task.id == id
            );

            if (!task) {
                return "not found!";
            }

            return task;

        } catch (error) {
            console.log(error);
        }
    }

    async createTask(requestBody) {
        try {
            const file = readFileSync(this.filePath);

            const task = {
                "id" : Math.floor(Math.random() * 100),
                "title" : requestBody['title'],
                "description" : requestBody['description'],
                "status" : "backlog"
            }

            if (file.length === 0) {
                await writeFile(this.filePath, JSON.stringify([task]));
            } else {
                const data = JSON.parse(file.toString())

                data.push(task)

                await writeFile(this.filePath, JSON.stringify(data));
            }

            return task;

        } catch (error) {
            console.log(error);
        }
    }

    async updateTask(id, requestBody) {
        try {
            const file = readFileSync(this.filePath);

            const data = JSON.parse(file.toString());

            const tasks = data.map(
                function (task) {
                    if (task['id'] == id) {
                        task['title']       = requestBody['title'];
                        task['description'] = requestBody['description'];
                    }
                    return task;
                }
            );

            await writeFile(this.filePath, JSON.stringify(tasks));

            return "task updated";


        } catch (error) {
            console.log(error);
        }
    }

    async deleteTask(id) {
        try {
            const file = readFileSync(this.filePath);

            const data = JSON.parse(file.toString());

            const tasks = data.filter((task) => task.id != id);

            await writeFile(this.filePath, JSON.stringify(tasks));

            return "task deleted!";


        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new TaskRepository();
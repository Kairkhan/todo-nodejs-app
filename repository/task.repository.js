const {readFile, writeFile} = require("fs/promises");
const {readFileSync} = require("fs");

class TaskRepository {
    constructor() {
        this.filePath = process.cwd() + "/database.json";
    }
    async getTasks() {
        try {
            const rawData = (await readFile(this.filePath)).toString();
            return JSON.parse(rawData);
        } catch (error) {
            console.log(error);
        }
    }

    async getTaskById(id) {
        try {
            const rawData = (await readFile(this.filePath)).toString();
            const [, result] = Object.entries(JSON.parse(rawData)).find(
                ([, task]) => task.id == id
            );
            return result;
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
}


module.exports = new TaskRepository();
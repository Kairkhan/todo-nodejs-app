const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {mongoose} = require('mongoose');

dotenv.config();


const mongoString = process.env.DATABASE_URL;


mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const PORT = process.env.PORT || 3000;

const tasksRouter = require("./routes/tasks");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/api", tasksRouter);


function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;
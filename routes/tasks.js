const router = require("express").Router();
const taskController = require("../controller/task.controller")

router.route("/tasks")
    .post(function (req, res) {
        res.json(req.body).status(200).send();
    });


router.route("/tasks")
    .get(function (req, res) {
        taskController.index().then(data => res.json(data));
    });



module.exports = router;
const router = require("express").Router();
const taskController = require("../controller/task.controller")

router.route("/tasks")
    .post(function (req, res) {
        taskController.store(req.body).then(data => res.json(data));
    });


router.route("/tasks")
    .get(function (req, res) {
        taskController.index().then(data => res.json(data));
    });

router.route("/tasks/:id")
    .get(function (req, res) {
       taskController.show(req.params.id).then(data => res.json(data));
    });


router.route("/tasks/:id")
    .put(function (req, res) {
        taskController.update(req.params.id, req.body).then(data => res.json(data));
    });


module.exports = router;
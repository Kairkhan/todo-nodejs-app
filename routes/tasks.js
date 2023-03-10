const router = require("express").Router();
const taskController = require("../controller/task.controller")

router.route("/tasks")
    .post(function (req, res) {
        taskController.store(req.body).then(data => res.json(data));
    });


router.route("/tasks")
    .get(function (req, res) {
        taskController.index(req.query).then(data => res.json(data));
    });

router.route("/tasks/:id")
    .get(function (req, res) {
       taskController.show(req.params.id).then(data => res.json(data));
    });


router.route("/tasks/:id")
    .put(function (req, res) {
        taskController.update(req.params.id, req.body).then(data => res.json(data));
    });

router.route("/tasks/:id")
    .delete(function (req, res) {
        taskController.destroy(req.params.id).then(data => res.json(data));
    });

router.route("/tasks/:id/backlog")
    .put(function (req, res) {
        taskController.backlog(req.params.id).then(data => res.json(data));
    });

router.route("/tasks/:id/in-progress")
    .put(function (req, res) {
        taskController.inProgress(req.params.id).then(data => res.json(data));
    });


module.exports = router;